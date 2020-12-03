import React, { useEffect } from 'react';
import Img from 'static/images/bannerofc.png';
import Wrapper, { Container } from './styles';

function Banner() {
    var bgStyle = {
        backgroundImage: `url(${Img})`,
        // backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    useEffect(() => {
        const isBrowser = typeof window !== "undefined";
        const WOW = isBrowser ? require("wowjs") : undefined;
        new WOW.WOW({
          live: false,
        }).init();
    }, []);
    
    return (
        <Wrapper style={bgStyle}>
            <div className="container">
                <h1 className="wow fadeInLeft">ENCONTRE SEU PRÓXIMO DESTINO</h1>
            </div>
        </Wrapper>
    );
}

export default Banner;