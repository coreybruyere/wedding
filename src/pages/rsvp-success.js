import React from "react";
import { Text } from "rebass";
import { FormattedMessage } from "react-intl";
import { Layout, Container, Main } from "../components/common";
import SEO from "../components/common/SEO";
import Header from "../components/theme/Header";

const SuccessPage = () => (
  <Layout>
    <React.Fragment>
      <SEO title="registry" />
      <Header />
      <Main>
        <Container>
          <Text as="h1">
            <FormattedMessage id="thanks!" />
          </Text>
          <p>
            Thank you for your RSVP! Feel free to contact us if you have any
            questions!
          </p>
        </Container>
      </Main>
    </React.Fragment>
  </Layout>
);

export default SuccessPage;
