import React from 'react';
import withAnalytics from '~/hocs/withAnalytics';
import Wrapper from './styles';
import { Link } from '../../routes';

const AboutCompanyPage = () => {
  return (
    <Wrapper>
        <h1>
            Sobre a empresa
        </h1>
        <div className="buttons">
            <Link route="/">
                <a>Home</a>
            </Link>
            <Link route="/contato">
                <a>Contato</a>    
            </Link>
        </div>        
    </Wrapper>
  );
}


export default withAnalytics()(React.memo(AboutCompanyPage));
