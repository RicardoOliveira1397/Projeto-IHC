import React, { useEffect } from 'react';
import withAnalytics from '~/hocs/withAnalytics';
import Wrapper from './styles';
import { Link } from '../../routes';

const HomePage = () => {
    
    useEffect(() => {
        fetch(`http://localhost/react-wordpress/wp-json/wp/v2/posts/5`)
        .then((respose) => respose.json())
        .then((resposeJson) => {
            console.log(resposeJson);
        })
        .catch((error) => {
            console.error(error);
        });
    })

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
