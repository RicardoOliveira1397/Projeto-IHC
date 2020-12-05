const next = require("next");
const routes = require("./routes");
const bodyParser = require("body-parser");
var cors = require("cors");
const nodemailer = require("nodemailer");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);
const express = require("express");

const sitemapOptions = {
  root: __dirname + "/next-wp/static/sitemap/",
  headers: {
    "Content-Type": "text/xml;charset=UTF-8",
  },
};

app.prepare().then(() => {
  const server = express();

  server.get("/sitemap.xml", (req, res) => {
    res.status(200).sendFile("sitemap.xml", sitemapOptions);
  });

  server
    .use(handler, (res) => {
      res.setHeader("Cache-Control", "public, max-age=365d, immutable");
    })
    .listen(3070);
});


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: "mlkotegroup@gmail.com", // senha: mlkote2020
    pass: "yosbxanedcwtkgwq", // senha de app
  },
});

const api = express();
api.use(cors());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

api.post("/contact", async (req, res) => {
  const data = req.body;

  await transporter.sendMail({
    from: '"TRAVEL Agência de viagens" <noreply@travelagenciadeviagens.com.br>', // sender address
    to: `plinio.desenvolvimento@gmail.com, ${data.email}`, // list of receivers
    subject: "Novo contato", // Subject line
    text: data.subject, // plain text body
    html: Contact(data), // html body
  });

  res.status(200).json({});
});

function Contact(data) {
  return `
    <table style="border-collapse: collapse; background: #eee;" align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%">
        <tr>
        <td style="padding: 35px 0 0 0;" align="center">
            <table style="width:100%; border-collapse: collapse; max-width: 600px;">
            <tr style="height: 100px; background: #f04662;">
                <td style="padding: 0 40px;">
                <h3 style="color: #fff; font-size: 22px;">${data.subject}</h3>
                </td>
            </tr>
    
            <tr>
                <td style="padding: 30px 40px; background: #fff; color: #000; font-family: sans-serif,Arial; font-size: 16px;">
                <p>
                    <h3 style="color: #000;">Informações do cliente</h3>
                    <p style="color: #000;">Nome: ${data.name}</p> 
                    <p style="color: #000;">E-mail: <a href="mailto: ${data.email}">${data.email}</a></p> 
                    <p style="color: #000;">Telefone: ${data.phone}</p> 
                    <br>
                    <h3 style="color: #000;">Formulário</h3>
                    <p style="color: #000;">Assunto: ${data.subject}</p>
                    <p style="color: #000;">Mensagem: ${data.message}</p>
                </p>
                </td>
            </tr>
            <tr style="height: 120px; background: #f04662;">
                <td style="padding: 0 40px; vertical-align: middle;">
                <p style="color: #fff; float: right; font-size: 10px;">TRAVEL Agência de viagens.</p>
                </td>
            </tr>
            </table>
        </td>
        </tr>
    </table>      
    `;
}

api.listen(3071, "0.0.0.0", () => console.log("API funcionando na porta 3001"));