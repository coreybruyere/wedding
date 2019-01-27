import React from "react";
import { graphql } from "gatsby";
import { Text, Box, Flex } from "rebass";
import { FormattedMessage } from "react-intl";
import {
  Layout,
  Container,
  Main,
  Section,
  LinkCard,
  Button
} from "../components/common";
import SEO from "../components/common/SEO";
import Header from "../components/theme/Header";

const RegistryPage = props => (
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

            <Flex
              alignItems="center"
              flexWrap={["wrap", "wrap", "wrap", "nowrap"]}
            >
              <LinkCard
                href="https://www.zola.com/registry/coreyandtori2019"
                image={props.data.vacationImage.childImageSharp.fluid}
                width={[1, 1, 1, 0.5]}
              >
                <Text as="p">
                  <FormattedMessage id="registry_vacation" />
                </Text>

                <Button as="span">
                  <FormattedMessage id="registry_vacation_cta" />
                </Button>
              </LinkCard>

              <LinkCard
                href="https://www.target.com/gift-registry/gift/corey-tori-2019"
                image={props.data.targetImage.childImageSharp.fluid}
                width={[1, 1, 1, 0.5]}
              >
                <Text as="p">
                  <FormattedMessage id="registry_target" />
                </Text>

                <Button as="span">
                  <FormattedMessage id="registry_target_cta" />
                </Button>
              </LinkCard>
            </Flex>
          </Section>
        </Container>
      </Main>
    </React.Fragment>
  </Layout>
);

export default RegistryPage;

export const pageQuery = graphql`
  query {
    targetImage: file(relativePath: { eq: "target2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    vacationImage: file(relativePath: { eq: "vacation2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
