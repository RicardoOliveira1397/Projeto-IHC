import styled, { keyframes } from 'styled-components';

const appearFromTop = keyframes`
   from {
      opacity: 0;
      transform: translateY(-50px);
   }

   to {
      opacity: 1;
      transform: translateY(0);
   }
`;

const Wrapper = styled.div`
   width: 100%;
   /* height: 100vh; */
   background: linear-gradient(140deg, #49ecd2, #0b695e 89%);
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

   h1 {
      color: #fff;
      font-size: 40px;
      width: 100%;
      text-align: center;
   }

   @media(max-width: 768px) {
      h1 {
         font-size: 30px;
      }
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

export const AboutCompany = styled.div`
   height: auto;
   width: 100%;
   background: #fff;
   padding: 40px 0;
   box-sizing: border-box;
   display: flex; 
   align-items: center; 
`;

export const AboutCompanyContent = styled.div`
   display: flex;
   color: #313131;
   justify-content: space-between;
   width: 100%;

   @media(max-width: 992px) {
      flex-direction: column;
      align-items: center;

      h2 {
         text-align: center;
      }

      p {
         max-width: 100% !important;
      }
   }

   h2 {
      position: relative;
      /* color: #F14E5B; */

      &:after {
         content: "";
         width: 100px;
         height: 3px;
         background: #F14E5B;
         position: absolute;
         bottom: -5px;
         margin-left: -80px;
      }
   }

   p {
      text-align: justify;
      line-height: 35px;
      max-width: 600px;
   }
`;

export const Icons = styled.div`
   /* max-height: calc(550px - 80px); */
   max-width: 630px;
   display: flex; 
   justify-content: center;
   width: 100%;
   flex-wrap: wrap;
`;

export const Icon = styled.div`
   display: flex; 
   align-items: center; 
   justify-content: center; 
   flex-direction: column;
   margin: 0 30px;
   width: 150px;

   @media(max-width: 768px) {
      width: 100%;
      margin: 10px 0;

      img {
         width: 50px;
      }
   }

   img {
      width: 80px;
   }

   h3 {
      margin: 12px 0;
      color: #F14E5B;
      text-align: center;
   }

   p {
      line-height: 30px !important;
      text-align: center !important;
      margin: 0;
   }
`;

export const Tickets = styled.div`
   /* height: 500px; */
   width: 100%;
   background: linear-gradient(90deg,#EE2B7A,#F57F31 140%);
   padding: 60px 0;
   padding-bottom: 80px;
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   justify-content: center; 
   align-items: center; 

   h2 {
      margin: 0;
      margin-bottom: 40px;
      color: #fff;
      position: relative;

      &:after {
         content: "";
         width: 100px;
         height: 3px;
         background: #fff;
         position: absolute;
         bottom: -5px;
         margin-left: -80px;
      }
   }
`;

export const TicketsContent = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;

   @media(max-width: 768px) {
      flex-direction: column;
   }  
`;

export const Ticket = styled.div`
   background: #fff;
   /* height: calc(450px - 80px); */
   box-sizing: border-box;
   border-radius: 5px;
   box-shadow: 0 3px 6px rgb(0 0 0 / 0.25);
   width: 300px;
   overflow: hidden;

   img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      object-fit: cover;
      transition: 0.5s;
      
      &:hover {
         transform: scale(1.3)
      }
   }

   &:nth-child(1) {
      h3 {
         color: #ee2c7a;
      }

      p {
         color: #313131;

         svg {
            color: #ee2c7a;
         }
      }

      button {
         color: #ee2c7a;
         border: 2px solid #ee2c7a;

         &:hover {
            background: #ee2c7a;
         }
      }
   }

   &:nth-child(2) {
      h3 {
         color: #f04662;
      }

      p {
         color: #313131;

         svg {
            color: #f04662;
         }
      }

      button {
         color: #f04662;
         border: 2px solid #f04662;

         &:hover {
            background: #f04662;
         }
      }
   }

   &:nth-child(3) {
      h3 {
         color: #f15358;
      }

      p {
         color: #313131;

         svg {
            color: #f15358;
         }
      }

      button {
         color: #f15358;
         border: 2px solid #f15358;

         &:hover {
            background: #f15358;
         }
      }
   }

   &:nth-child(4) {
      h3 {
         color: #F57F31;
      }

      p {
         color: #313131;

         svg {
            color: #F57F31;
         }
      }

      button {
         color: #F57F31;
         border: 2px solid #F57F31;
         
         &:hover {
            background: #F57F31;
         }
      }
   }   

   @media(max-width: 768px) {
      width: 100%;

      margin: 10px 0;
   }  
`;

export const TicketImg = styled.div`
   overflow: hidden;
   width: 300px;
   height: 260px;

   @media(max-width: 768px) {
      img {
         width: 100%;
      }
      
      width: 100%;
   }  
`;

export const TicketDescription = styled.div`
   padding: 20px;
   box-sizing: border-box;

   h3 {
      font-size: 15px;
      margin: 0;
      text-transform: uppercase;

      img {
         width: 30px;
      }
   }

   p {
      margin: 10px 0;

      svg {
         width: 30px !important;
      }
   }

   button {
      font-weight: 600;
      padding: 8px 10px;
      background: transparent;
      border-radius: 5px;
      font-size: 13px;
      width: 100%;
      transition: 0.8s;

      &:hover {
         color: #fff;
      }
   }
`;

export const Container = styled.div`
   max-width: 1280px;
   width: 100%;
   margin: 0 auto;
   position: relative;
   display: flex;
   align-items: center;
`;

export const ContactForm = styled.div`
   width: 100%;
   padding: 80px 0 60px 0;
   box-sizing: border-box;

   h2 {
      margin: 0;
      margin-bottom: 40px;
      color: #fff;
      position: relative;
      text-align: center;

      &:after {
         content: "";
         width: 100px;
         height: 3px;
         background: #fff;
         position: absolute;
         bottom: -5px;
         margin-left: -80px;
      }
   }

   form {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      input {
         width: 48%;
         margin: 15px 0;
         height: 40px;
         border-radius: 5px;
         padding: 0 10px;
         box-sizing: border-box;
         background: transparent;
         border: 1.5px solid #fff;
         color: #fff;

         &::placeholder {
            color: #fff;
            font-weight: 600;
         }
      }

      textarea {
         width: 100%;
         margin: 15px 0;
         height: 130px;
         border-radius: 5px;
         padding: 10px;
         box-sizing: border-box;
         background: transparent;
         border: 1.5px solid #fff;
         color: #fff;

         &::placeholder {
            color: #fff;
            font-weight: 600;
         }
      }
   }

   @media (max-width: 768px) {
      background-position: bottom;  

      form {
         input {
            width: 100%;
         }
      }
   }
`;


export const FormButtons = styled.div`
   width: 100%;
   display:flex;
   align-items: center;
   justify-content: center;
`;

export const FormButton = styled.button`
   height: 40px;
   background: transparent;
   border: 2px solid #f04662;
   border-radius: 5px;
   color: #f04662;
   min-width: 200px;
   margin-top: 15px;
   font-weight: 600;
   text-transform: uppercase;
   transition: 0.6s;

   @media (max-width: 768px) {
      width: 100%;
   }

   &:hover {
      background: #f04662;
      color: #fff;
   }
`;

export const ToastMessage = styled.div`
   background: ${props => props.success ? 'rgba(61, 181, 106, 0.75)':'rgba(199, 63, 53, 0.76)'};
   text-align: 'center';
   width: 100%;
   margin: 0 auto;
   height: 50px;
   padding: 0 15px;
   border-radius: 5px;
   box-shadow: 0 3px 6px rgba(0, 0, 0, 0.31);
   text-transform: uppercase;
   font-weight: 500;
   font-size: 15px;
   box-sizing: border-box;
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: relative;
   animation: ${appearFromTop} 1s;

   p {
      color: #fff;

      &.close {
         position: absolute;
         right: 19px;
         top: 13px;
         cursor: pointer;
         font-size: 20px;
         margin: 0;
         color: #ddd !important;
      }
   }
`;
