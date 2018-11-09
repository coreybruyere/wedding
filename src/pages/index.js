import React from "react";
import { Heading } from "rebass";
import { FormattedMessage } from "react-intl";
import { Layout, Container, Main } from "../components/common";
import SEO from "../components/common/SEO";
import Header from "../components/theme/Header";

const IndexPage = () => (
  <Layout>
    <React.Fragment>
      <SEO title="welcome" />
      <Header hero />
      <Main hero>
        <Container>
          <Heading as="h1">
            <FormattedMessage id="welcome" />
          </Heading>
        </Container>
      </Main>
    </React.Fragment>
  </Layout>
);

export default IndexPage;
