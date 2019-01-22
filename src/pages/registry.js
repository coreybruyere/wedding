import React from "react";
import { Text, Card, Flex } from "rebass";
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

          <Section id="registry">
            <Text as="p">
              <FormattedMessage id="registry_details" />
            </Text>

            <Flex flexWrap="wrap">
              <Card
                width={1}
                mb={4}
                bg="#fff"
                color="#403b32"
                borderRadius={8}
                border="4px solid"
                borderColor="rgba(253,0,34,0.25098)"
                boxShadow="0 2px 16px rgba(0,0,0,0.25)"
                as="a"
                target="_blank"
                href="https://www.zola.com/registry/coreyandtori2019"
                css={{ textDecoration: "none" }}
              >
                Honeymoon Cash Fund
              </Card>

              <Card
                width={1}
                mb={4}
                bg="#fff"
                color="#403b32"
                borderRadius={8}
                border="4px solid"
                borderColor="rgba(253,0,34,0.25098)"
                boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
                as="a"
                target="_blank"
                href="https://www.target.com/gift-registry/gift/corey-tori-2019/"
                css={{ textDecoration: "none" }}
              >
                Target Registry
              </Card>
            </Flex>
          </Section>
        </Container>
      </Main>
    </React.Fragment>
  </Layout>
);

export default RegistryPage;
