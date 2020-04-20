import React from 'react';
import withAnalytics from '~/hocs/withAnalytics';
import Wrapper from './styles';
import { Link } from '../../routes';

const HomePage = () => {
  return (
    <Wrapper>
        <h1>
            HomePage
        </h1>
        <div className="buttons">
            <Link route="/sobre-a-empresa">
                <a>Sobre a empresa</a>
            </Link>
            <Link route="/contato">
                <a>Contato</a>    
            </Link>
        </div>        
    </Wrapper>
  );
}


export default withAnalytics()(React.memo(HomePage));
