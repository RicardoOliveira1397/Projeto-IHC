import styled from 'styled-components';

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
   height: 500px;
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
   }
`;

export const Icons = styled.div`
   display: flex; 
   margin-left: 60px;
   justify-content: center;
   max-height: calc(550px - 80px);
   width: 100%;
`;

export const Icon = styled.div`
   display: flex; 
   align-items: center; 
   justify-content: center; 
   flex-direction: column;
   margin: 0 30px;
   width: 150px;

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
`;

export const Ticket = styled.div`
   background: #fff;
   height: calc(450px - 80px);
   box-sizing: border-box;
   border-radius: 5px;
   box-shadow: 0 3px 6px rgb(0 0 0 / 0.25);
   width: 300px;
   cursor: pointer;
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

   h3 {
      padding: 0 20px;
      color: #F57F31;
      text-transform: uppercase;
   }

   p {
      padding: 0 20px;
      color: #313131;
      /* font-weight: 600; */
   }
`;

export const TicketImg = styled.div`
   overflow: hidden;
   width: 300px;
   height: 260px;
`;

export const TicketDescription = styled.div`
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
   height: 600px;
`;

export const Form = styled.div`
`;
