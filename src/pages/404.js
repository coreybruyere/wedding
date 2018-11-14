import React from "react";
import { Text } from "rebass";
import { FormattedMessage } from "react-intl";
import { Layout, Container, Main } from "../components/common";
import SEO from "../components/common/SEO";
import Header from "../components/theme/Header";

const NotFoundPage = () => (
  <Layout>
    <React.Fragment>
      <SEO title="not_found" />
      <Header />
      <Main>
        <Container>
          <Text>
            <FormattedMessage id="not_found" />
          </Text>
        </Container>
      </Main>
    </React.Fragment>
  </Layout>
);

export default NotFoundPage;
