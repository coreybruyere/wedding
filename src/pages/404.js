import React from "react";
import { Heading } from "rebass";
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
          <Heading>
            <FormattedMessage id="not_found" />
          </Heading>
        </Container>
      </Main>
    </React.Fragment>
  </Layout>
);

export default NotFoundPage;
