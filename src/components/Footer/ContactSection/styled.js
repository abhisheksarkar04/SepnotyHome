import styled from "styled-components";

export const ContactItems = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 21px;
  @media screen and (max-width: 576px) {
    padding-top: 40px;
  }
`;

export const ContactType = styled.p`
  font-size: 12px;
`;

/* @media screen and (max-width: 576px) {
  .contact-type {
    font-size: 8px;
  }
 @media screen and (max-width:455px){
    width: 800px;
    border-radius:10px;
    margin-left:-70px;
    padding: 20px 0px 20px 15px;
    margin-right: -90px;
  }
  .contact-items {
    padding-top: 7px;
  }
} */
