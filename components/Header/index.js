import React from 'react';
import Wrapper, { Container } from './styles';
import Logo from 'static/images/logo-colorido.png';

function Header({ showMenu, onScrollTo }) {
  return (
    <Wrapper showMenu={showMenu}>
        <Container>
            <img src={Logo} />
            <ul>
                <li onClick={() => onScrollTo('top')}>INÍCIO</li>
                <li onClick={() => onScrollTo('about_company')}>SOBRE A EMPRESA</li>
                <li onClick={() => onScrollTo('travels')}>VIAGEM DOS SONHOS</li>
                <li onClick={() => onScrollTo('contact')}>CONTATO</li>
            </ul>
        </Container>        
    </Wrapper>
  );
}

export default Header;