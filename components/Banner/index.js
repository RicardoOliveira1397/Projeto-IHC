import React from 'react';
import Img from 'static/images/bannerofc.png';
import Wrapper, { Container } from './styles';

function Banner() {
    var bgStyle = {
        backgroundImage: `url(${Img})`,
        // backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
    
    return (
        <Wrapper style={bgStyle}>
            <div className="container">
                <h1>ENCONTRE SEU PRÓXIMO DESTINO</h1>
            </div>
        </Wrapper>
    );
}

export default Banner;