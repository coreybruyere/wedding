import React from "react";
import { Heading } from "rebass";
import { FormattedMessage } from "react-intl";
import { Layout, Container, Main } from "../components/common";
import SEO from "../components/common/SEO";
import Header from "../components/theme/Header";

const DetailsPage = () => (
  <Layout>
    <React.Fragment>
      <SEO title="Waddup" />
      <Header />
      <Main>
        <Container>
          <Heading as="h1">WADDUP!</Heading>
        </Container>
      </Main>
    </React.Fragment>
  </Layout>
);

export default DetailsPage;
