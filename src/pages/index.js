import React from 'react';
import styled from 'styled-components';

import { MainLayout } from 'layouts';
import { SEO } from 'components';
import logo from 'assets/images/logo.svg';
import mail from 'assets/images/mail.svg';

const StyledHeading = styled.h1`
  font-size: 64px;
  font-family: ${({ theme }) => theme.font.family.atma};
  color: white;
  text-align: center;
`;

const StyledInfo = styled.p`
  font-size: 18px;
  font-family: ${({ theme }) => theme.font.family.roboto};
  color: white;
  text-align: left;
  padding-left: 9px;
`;

const Container = styled.div`
  width: 90vw;
  height: 90vh;
  padding-top: 200px;
  margin: 0 auto;
  & div {
    display: flex;
    flex-direction: column;

    & img {
      align-self: center;
      margin-bottom: 50px;
    }
  }
`;

const MailBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`;

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <Container>
      <div>
        <img src={logo} alt="Wielopokoleniowi logo" width="700" />
        <StyledHeading>Zapraszamy wkrótce</StyledHeading>
      </div>
    </Container>
    <MailBox>
      <img src={mail} alt="mail icon" />
      <StyledInfo>martyniec@kancelariasukcesyjna.pl</StyledInfo>
    </MailBox>
  </MainLayout>
);

export default IndexPage;
