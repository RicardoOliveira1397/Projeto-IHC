import React, { useCallback, useState } from 'react';
import Wrapper, { Container, ResponsiveMenu } from './styles';
import Logo from 'static/images/logo-colorido.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";

function Header({ showMenu, onScrollTo }) {
  const [openReponsiveMenu, setOpenResponsiveMenu] = useState(false);

  const handleResponsiveMenu = useCallback(() => {
    setOpenResponsiveMenu(!openReponsiveMenu);
  }, [openReponsiveMenu]);

  return (
    <Wrapper showMenu={showMenu} showResponsiveMenu={openReponsiveMenu}>
      <ResponsiveMenu>
        <FontAwesomeIcon icon={faBars} onClick={handleResponsiveMenu} />
      </ResponsiveMenu>
      <div className="container">
        <img src={Logo} />
        <ul>
          <li onClick={() => onScrollTo('top')}>INÍCIO</li>
          <li onClick={() => onScrollTo('about_company')}>SOBRE A EMPRESA</li>
          <li onClick={() => onScrollTo('travels')}>VIAGEM DOS SONHOS</li>
          <li onClick={() => onScrollTo('contact')}>FALE CONOSCO</li>
        </ul>
      </div>        
    </Wrapper>
  );
}

export default Header;