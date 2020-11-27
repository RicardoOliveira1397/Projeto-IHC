import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: #ddd;
    display: flex;
    align-items: center;
    text-align: center;

    @media (max-width: 768px) {
        background-position-x: 61%;
        margin-top: 50px;
    }
`;

export default Wrapper;

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    position: relative;
`;