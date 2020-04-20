import React from 'react';
import withAnalytics from '~/hocs/withAnalytics';
import Wrapper from './styles';
import { Link } from '../../routes';

const ContactPage = () => {
  return (
    <Wrapper>
        <h1>
            Contato
        </h1>
        <div className="buttons">
            <Link route="/">
                <a>HomePage</a>
            </Link>
            <Link route="/sobre-a-empresa">
                <a>Sobre a empresa</a>    
            </Link>
        </div>        
    </Wrapper>
  );
}


export default withAnalytics()(React.memo(ContactPage));
