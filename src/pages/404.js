import React from "react";
import { Heading } from "rebass";
import { FormattedMessage } from "react-intl";
import { Layout, Container } from "../components/common";
import SEO from "../components/common/SEO";
import Header from "../components/theme/Header";

const NotFoundPage = () => (
  <Layout>
    <React.Fragment>
      <SEO title="not_found" />
      <Header />
      <Container>
        <Heading>
          <FormattedMessage id="not_found" />
        </Heading>
      </Container>
    </React.Fragment>
  </Layout>
);

export default NotFoundPage;
