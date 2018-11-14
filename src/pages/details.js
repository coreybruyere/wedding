import React from "react";
import { Text } from "rebass";
import { FormattedMessage } from "react-intl";
import { Layout, Container, Main } from "../components/common";
import SEO from "../components/common/SEO";
import Header from "../components/theme/Header";

const DetailsPage = () => (
  <Layout>
    <React.Fragment>
      <SEO title="wedding details" />
      <Header />
      <Main>
        <Container>
          <Text as="h1">
            <FormattedMessage id="wedding details" />
          </Text>
        </Container>
      </Main>
    </React.Fragment>
  </Layout>
);

export default DetailsPage;
