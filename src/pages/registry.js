import React from "react";
import { Text } from "rebass";
import { FormattedMessage } from "react-intl";
import { Layout, Container, Main, Section } from "../components/common";
import SEO from "../components/common/SEO";
import Header from "../components/theme/Header";

const RegistryPage = () => (
  <Layout>
    <React.Fragment>
      <SEO title="registry" />
      <Header />
      <Main>
        <Container>
          <Text as="h1" mb={5}>
            <FormattedMessage id="registry" />
          </Text>

          <Section>
            [[Boxed links to registry - Make sure to translate]]
          </Section>
        </Container>
      </Main>
    </React.Fragment>
  </Layout>
);

export default RegistryPage;
