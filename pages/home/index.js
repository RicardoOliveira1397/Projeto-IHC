import React, { useEffect, useCallback, useState, useRef } from "react";
import withAnalytics from "~/hocs/withAnalytics";
import Wrapper, { AboutCompany, AboutCompanyContent, Container, Tickets, TicketsContent, Ticket, TicketImg, TicketDescription, Icons, Icon, ContactForm, FormButtons, FormButton, ToastMessage } from "./styles";
import { Link } from "../../routes";
import Header from '../../components/Header';
import Banner from '../../components/Banner';

import Icon1 from 'static/images/ilha.png';
import Icon2 from 'static/images/hora-do-voo.png';
import Icon3 from 'static/images/bagagem-de-viagem.png';

import Ticket1 from 'static/images/caribe.png';
import Ticket2 from 'static/images/deserto.png';
import Ticket3 from 'static/images/china.png';
import Ticket4 from 'static/images/everest.png';

import TicketIcon from 'static/images/ticket.png';

import { Form, Input, Textarea } from "@rocketseat/unform";

import ContactBackground from 'static/images/contato-overlay.png';
import Footer from "components/Footer";

import api from "../../services/api";
import { telMask } from "../../services/mask";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [phone, setPhone] = useState("");

  var ContactBgStyle = {
    backgroundImage: `url(${ContactBackground})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };

  const aboutCompanyRef = useRef();
  const travelsRef = useRef();
  const contactRef = useRef();
  var currentRef = null;

  const handleScroll = useCallback(async (value) => {
    if (value !== "top") {
      currentRef = await scrolls[value];
      currentRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    } else {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }
  }, [currentRef, aboutCompanyRef, travelsRef, contactRef]);

  const scrolls = {
    about_company: aboutCompanyRef,
    travels: travelsRef,
    contact: contactRef,
  };

  const handleSubmit = useCallback(async (data, { resetForm }) => {
    setLoading(true);

    try {

      let formData = new FormData(data)
      fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      }).then(() => {

      }).catch((error) => {
        alert(error)
      })

      // await api.post("/api/contact", data);
      setSuccess(true);
      setError(false);
      setLoading(false);
      setPhone("");
      // await ContactEmail(data);
      resetForm();
    } catch (error) {
      setSuccess(false);
      setError(true);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (window.pageYOffset > 0) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }

    const onScroll = e => {
      if (e.target.documentElement.scrollTop > 0) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  useEffect(() => {
    const isBrowser = typeof window !== "undefined";
    const WOW = isBrowser ? require("wowjs") : undefined;
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <Wrapper>
      <Header showMenu={showMenu} onScrollTo={handleScroll} />
      <Banner />

      <AboutCompany ref={aboutCompanyRef}>
        <div className="container">
          <AboutCompanyContent>
            <div className="wow fadeInLeft">
              <h2>SOBRE A TRAVEL</h2>
              <p>A TRAVEL faz tudo por uma boa viagem. Por isso trabalha para transformar essa experiência na melhor conquista de sua vida, através de novas tendências e ampla rede de produtos e serviços turísticos. É essa forma de pensar que estabelece a TRAVEL como a maior operadora de turismo da América Latina.
                O comprometimento social, a solidez e a inovação propiciaram notoriedade e visibilidade junto ao público.</p>
            </div>


            <Icons>
              <Icon className="wow fadeInUp">
                <img src={Icon1} />
                <h3>ILHAS PARADISÍACAS</h3>
                <p>Faça a viagem dos seus sonhos com a TRAVEL.</p>
              </Icon>
              <Icon className="wow fadeInDown" data-wow-delay=".3s">
                <img src={Icon2} />
                <h3>DISPONIBILIDADE</h3>
                <p>Conte conosco a qualquer momento do dia.</p>
              </Icon>
              <Icon className="wow fadeInUp" data-wow-delay=".7s">
                <img src={Icon3} />
                <h3>NOVOS HORIZONTES</h3>
                <p>Desbrave o mundo com a TRAVEL.</p>
              </Icon>
            </Icons>
          </AboutCompanyContent>
        </div>
      </AboutCompany>

      <Tickets ref={travelsRef}>
        <h2 className="wow fadeInLeft">VIAGEM DOS SONHOS</h2>
        <div className="container">
          <TicketsContent>
            <Ticket className="wow fadeInDown">
              <TicketImg>
                <img src={Ticket1} />
              </TicketImg>

              <TicketDescription>
                <h3>PRAIAS DO CARIBE</h3>
                <p>R$ 10.500,00   <FontAwesomeIcon icon={faUser} />2 Pessoa(s)</p>
                <button onClick={() => alert('Em breve!')}>COMPRAR</button>
              </TicketDescription>
            </Ticket>

            <Ticket className="wow fadeInUp" data-wow-delay=".3s">
              <TicketImg>
                <img src={Ticket2} />
              </TicketImg>

              <TicketDescription>
                <h3>DESERTO DO SAARA</h3>
                <p>R$ 8.000,00   <FontAwesomeIcon icon={faUser} />1 Pessoa(s)</p>
                <button onClick={() => alert('Em breve!')}>COMPRAR</button>
              </TicketDescription>
            </Ticket>

            <Ticket className="wow fadeInDown" data-wow-delay=".6s">
              <TicketImg>
                <img src={Ticket3} />
              </TicketImg>

              <TicketDescription>
                <h3>MURALHA DA CHINA</h3>
                <p>R$ 5.000,00   <FontAwesomeIcon icon={faUser} />1 Pessoa(s)</p>
                <button onClick={() => alert('Em breve!')}>COMPRAR</button>
              </TicketDescription>
            </Ticket>

            <Ticket className="wow fadeInUp" data-wow-delay=".9s">
              <TicketImg>
                <img src={Ticket4} />
              </TicketImg>

              <TicketDescription>
                <h3>EVEREST</h3>
                <p>R$ 15.000,00   <FontAwesomeIcon icon={faUser} />1 Pessoa(s)</p>
                <button onClick={() => alert('Em breve!')}>COMPRAR</button>
              </TicketDescription>
            </Ticket>
          </TicketsContent>
        </div>
      </Tickets>

      <ContactForm style={ContactBgStyle} ref={contactRef}>
        <h2 className="wow fadeInUp">FALE CONOSCO</h2>

        <div className="container">
          {/* <Form onSubmit={handleSubmit}> */}
          <form name="contact" method="POST" data-netlify="true">

            {success && (
              <ToastMessage success={true}>
                <p>Formulário enviado com sucesso!</p>
                <p className="close" onClick={() => setSuccess(false)}>
                  X
                </p>
              </ToastMessage>
            )}

            {error && (
              <ToastMessage success={false}>
                <p>Erro ao enviar formulário, tente novamente.</p>
                <p className="close" onClick={() => setError(false)}>
                  X
                </p>
              </ToastMessage>
            )}

            <Input className="wow fadeInUp" name="nome" placeholder="Nome" required autoComplete={false} />
            <Input className="wow fadeInUp" data-wow-delay=".2s" name="email" placeholder="E-mail" required autoComplete={false} />
            <Input
              className="wow fadeInUp" data-wow-delay=".4s"
              name="telefone"
              type="tel"
              placeholder="Telefone"
              required
              value={phone}
              onChange={async (e) => {
                setPhone(await telMask(e.target.value));
              }}
              autoComplete={false}
            />
            <Input className="wow fadeInUp" data-wow-delay=".6s" name="assunto" placeholder="Assunto" required autoComplete={false} />
            <Textarea className="wow fadeInUp" data-wow-delay=".8s" name="mensagem" placeholder="Mensagem" className="textarea" autoComplete={false} />
            <FormButtons>
              <FormButton type="submit" className="wow fadeInUp" data-wow-delay="1s" disabled={loading}>{loading ? "Enviando..." : "Enviar"}</FormButton>
            </FormButtons>
          </form>
        </div>
      </ContactForm>

      <Footer onScrollTo={handleScroll} />
    </Wrapper>
  );
};

export default withAnalytics()(React.memo(HomePage));
