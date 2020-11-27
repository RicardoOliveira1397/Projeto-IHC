import React, { useEffect, useCallback, useState, useRef } from "react";
import withAnalytics from "~/hocs/withAnalytics";
import Wrapper, { AboutCompany, AboutCompanyContent, Container, Tickets, TicketsContent, Ticket, TicketImg, TicketDescription, Icons, Icon, ContactForm, Form } from "./styles";
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

import ContactBackground from 'static/images/contato-overlay.png';
import Footer from "components/Footer";

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);

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
      window.scroll({top: 0, left: 0, behavior: 'smooth' })
    }    
  }, [currentRef, aboutCompanyRef, travelsRef, contactRef]);
  
  const scrolls = {
    about_company: aboutCompanyRef,
    travels: travelsRef,
    contact: contactRef,
  };

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

  return (
    <Wrapper>
      <Header showMenu={showMenu} onScrollTo={handleScroll} />
      <Banner />
      <AboutCompany ref={aboutCompanyRef}>
        <Container>
          <AboutCompanyContent>
            <div>
              <h2>SOBRE A TRAVEL</h2>
              <p>A TRAVEL faz tudo por uma boa viagem. Por isso trabalha para transformar essa experiência na melhor conquista de sua vida, através de novas tendências e ampla rede de produtos e serviços turísticos. É essa forma de pensar que estabelece a TRAVEL como a maior operadora de turismo da América Latina.
                O comprometimento social, a solidez e a inovação propiciaram notoriedade e visibilidade junto ao público.</p>
            </div>


            <Icons>
              <Icon>
                <img src={Icon1} />
                <h3>ILHAS PARADISÍACAS</h3>
                <p>Faça a viagem dos seus sonhos com a TRAVEL.</p>
              </Icon>
              <Icon>
                <img src={Icon2} />
                <h3>DISPONIBILIDADE</h3>
                <p>Conte conosco a qualquer momento do dia.</p>
              </Icon>
              <Icon>
                <img src={Icon3} />
                <h3>BAGAGEM</h3>
                <p>Garantimos a segurança de suas bagagens.</p>
              </Icon>
            </Icons>
          </AboutCompanyContent>
        </Container>
      </AboutCompany>

      <Tickets ref={travelsRef}>
        <h2>VIAGEM DOS SONHOS</h2>
        <Container>
          <TicketsContent>
            <Ticket>
              <TicketImg>
                <img src={Ticket1} />
              </TicketImg>

              <TicketDescription>
                <h3>PRAIAS DO CARIBE</h3>
                <p>R$ 3.500,00</p>
              </TicketDescription>
            </Ticket>

            <Ticket>
              <TicketImg>
                <img src={Ticket2} />
              </TicketImg>

              <TicketDescription>
                <h3>DESERTO DO SAARA</h3>
                <p>R$ 8.000,00</p>
              </TicketDescription>
            </Ticket>

            <Ticket>
              <TicketImg>
                <img src={Ticket3} />
              </TicketImg>

              <TicketDescription>
                <h3>MURALHA DA CHINA</h3>
                <p>R$ 2.000,00</p>
              </TicketDescription>
            </Ticket>
            
            <Ticket>
              <TicketImg>
                <img src={Ticket4} />
              </TicketImg>

              <TicketDescription>
                <h3>EVEREST</h3>
                <p>R$ 2.000,00</p>
              </TicketDescription>
            </Ticket>
          </TicketsContent>
        </Container>
      </Tickets>

      <ContactForm style={ContactBgStyle} ref={contactRef}>
        <Container>
          <Form>

          </Form>
        </Container>
      </ContactForm>

      <Footer />
    </Wrapper>
  );
};

export default withAnalytics()(React.memo(HomePage));
