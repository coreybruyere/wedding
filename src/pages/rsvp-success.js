import React from "react";
import { Text } from "rebass";
import { FormattedMessage } from "react-intl";
import { Layout, Container, Main, Section } from "../components/common";
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

          <Section>
            <Text as="p">
              <FormattedMessage id="rsvp_thanks" />
            </Text>
          </Section>
        </Container>
      </Main>
    </React.Fragment>
  </Layout>
);

export default SuccessPage;
