import styled from "styled-components";

export default Wrapper = styled.div`
  background: #f04662;
  width: 100%;

  .container {
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    .row {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      padding: 40px 0;

      .col {
        width: 20%;

        h5 {
          color: #fff;
          margin-top: 0;
        }

        ul {
          padding-left: 15px;
        }

        a {
          font-size: 15px !important;
          line-height: 10px;

          svg {
            font-size: 22px;
          }
        }

        a,
        p,
        li,
        li a {
          color: #fff;
          font-size: 14px;
          text-decoration: none;
          line-height: 20px;
          margin-bottom: 5px;
        }

        p svg,
        a.address svg {
          font-size: 22px;
          margin-right: 5px;
          width: 18px;
          position: relative;
          top: 3px;

          &.fa-map-marker-alt {
            width: 14px;
            padding: 0 2px;
          }
        }

        &:nth-child(1) {
          width: 35%;
          box-sizing: border-box;
        }

        &:nth-last-child(1) {
          /* width: 35%; */

          a {
            position: relative;
            display: inline-block;
            margin-right: 10px;

            &:before {
              content: "";
              position: absolute;
              top: 4px;
              left: 0;
              height: calc(100% - 8px);
              width: 100%;
              background: #fff;
              border-radius: 7px;
            }

            svg {
              font-size: 50px;
              position: relative;
              z-index: 10;
              color: #25d366;
              cursor: pointer;

              &.fa-facebook-square {
                color: #3b5998;
              }

              &.fa-linkedin {
                color: #0e7ab8;
              }
            }
          }
        }

        @media (max-width: 768px) {
          width: 50% !important;
          padding: 20px;
          box-sizing: border-box;
        }

        @media (max-width: 450px) {
          width: 100% !important;
          padding: 20px;
          box-sizing: border-box;
        }
      }
    }
  }

  .copyright {
    width: 100%;
    background: #f15159;
    text-align: center;
    padding: 15px 0;

    p,
    a {
      color: #fff;
      font-size: 14px;
      margin: 0;

      @media (max-width: 768px) {
        font-size: 13px !important;
        line-height: 20px;
      }
    }

    a {
      font-weight: 600;
      text-decoration: none;
    }
  }
`;

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
`;

