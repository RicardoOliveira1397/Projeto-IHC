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
            position: relative;
            &:after {
                content: "";
                transform: scaleX(0);
                transition: transform 0.3s;
            }
            
            &:hover {
                &:after {
                    content: "";
                    width: 100%;
                    height: 2px;
                    background: #F15159;
                    position: absolute;
                    bottom: -10px;
                    right: 0;
                    transform: scaleX(1);
                }
            }
        }
    }

    @media(max-width: 768px) {
        transition: height 0.5s;
        overflow: hidden;
        height:  ${props => props.showResponsiveMenu ? '289px !important':'80px !important'};
        background: #fff;

        /* height: auto; */

        .container {
            max-width: 100% !important;
            flex-direction: column;
            img {
                margin: 20px 0;
            }
        }

        ul {
            flex-direction: column;
            height: ${props => props.showResponsiveMenu ? 'auto !important':'80px !important'};
            display: ${props => props.showResponsiveMenu ? 'block':'none'};


            li {

                &:nth-child(1) {
                    border-top: 1px solid #ddd;
                }

                width: 100%;
                height: 50px;
                border-bottom: 1px solid #ddd;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0;

                &:after {
                    display: none;
                }
            }
        }
    }
`;

export default Wrapper;

export const ResponsiveMenu = styled.div`
    display: none;

    svg {
        color: #f15358;
        font-size: 25px;
        position: absolute;
        right: 20px;
        top: 28px;
        cursor: pointer !important;
        z-index: 9999;
    }

    @media(max-width: 768px) {
        display: block;
    }
`;

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
`;
