import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(140deg, #49ecd2, #0b695e 89%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        color: #fff;
    }

    .buttons {
        display: flex;
        width: auto;
        justify-content: space-between;
    }

    .buttons a {
        background: transparent;
        border: 2px solid #fff;
        border-radius: 50px;
        padding: 10px 20px;
        color: #fff;
        font-weight: 600;
        text-decoration: none !important;
    }

    .buttons a:hover {
        background: #ffffff;
        border: 2px solid #ffffff;
        color: #1cb3a1;
    }
`; 

export default Wrapper;