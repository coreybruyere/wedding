import React from "react";
import { Heading } from "rebass";
import { FormattedMessage } from "react-intl";
import { Layout, Container, Main } from "../components/common";
import SEO from "../components/common/SEO";
import Header from "../components/theme/Header";

const RegistryPage = () => (
  <Layout>
    <React.Fragment>
      <SEO title="registry" />
      <Header />
      <Main>
        <Container>
          <Heading as="h1">
            <FormattedMessage id="registry" />
          </Heading>
        </Container>
      </Main>
    </React.Fragment>
  </Layout>
);

export default RegistryPage;
