import React from 'react';
import Wrapper, { Container } from './styles';
import Logo from 'static/images/logo-colorido.png';

function Header({ showMenu }) {
  return (
    <Wrapper showMenu={showMenu}>
        <Container>
            <img src={Logo} />
            <ul>
                <li>INÍCIO</li>
                <li>SOBRE A EMPRESA</li>
                <li>VIAGEM DOS SONHOS</li>
                <li>CONTATO</li>
            </ul>
        </Container>        
    </Wrapper>
  );
}

export default Header;