const nodemailer = require("nodemailer");

exports.handler = async function (event) {
    let data = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "mlkotegroup@gmail.com", // senha: mlkote2020
        pass: "yosbxanedcwtkgwq", // senha de app
      },
    });

    await transporter.sendMail({
      from: '"TRAVEL Agência de viagens" <noreply@travelagenciadeviagens.com.br>', // sender address
      to: `plinio.desenvolvimento@gmail.com, ${data.email}`, // list of receivers
      subject: "Novo contato", // Subject line
      text: data.subject, // plain text body
      html: `
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
      `, // html body
    });
}
