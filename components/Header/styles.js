import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;

    box-sizing: border-box;
    /* opacity: 0.9; */
    background: ${props => props.showMenu ? '#fff':'transparent'};
    transition: 0.3s;
    z-index: 999;

    img {
        object-fit: contain;
    }

    ul {
        width: 100%;
        height: 80px;
        margin: 0;
        padding: 0;
        list-style: none;
        
        display: flex;
        justify-content: flex-end;
        align-items: center;

        li {
            margin: 0 25px;
            font-weight: 600;
            color: #F15159;
            /* font-family: sans-serif; */
            cursor: pointer;
        }
    }
`;

export default Wrapper;

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
`;
