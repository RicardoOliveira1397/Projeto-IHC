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
            <Container>
                <h1>ENCONTRE SEU PRÓXIMO DESTINO</h1>
            </Container>
        </Wrapper>
    );
}

export default Banner;