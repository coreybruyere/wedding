import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Text, Flex, Box } from "rebass";
import { FormattedMessage } from "react-intl";
import {
  Layout,
  Button,
  Link,
  Container,
  Main,
  Section
} from "../components/common";
import SEO from "../components/common/SEO";
import Header from "../components/theme/Header";

const DetailsPage = props => (
  <Layout>
    <React.Fragment>
      <SEO title="wedding_details" />
      <Header />
      <Main>
        <Container>
          <Text as="h1" mb={5}>
            <FormattedMessage id="wedding_details" />
          </Text>

          <Section id="venue">
            <Text as="h2">
              <FormattedMessage id="venue" />
            </Text>

            <dl>
              <dt>
                <FormattedMessage id="wedding_reception" />
              </dt>
              <dd>
                {" "}
                Hangar 21
                <br />
                3970 Artesia Ave.
                <br />
                Fullerton, CA 92833
              </dd>
            </dl>

            <Flex mx={[0, -3, -5]} flexWrap="wrap" justifyContent="center">
              <Box mx={1}>
                <Button as="a" href="https://goo.gl/maps/uvY4b9oRgNC2">
                  Google Maps
                </Button>
              </Box>

              <Box mx={1}>
                <Button
                  as="a"
                  href="https://www.waze.com/ul?ll=33.87318440%2C-117.97925060&navigate=yes&zoom=16"
                >
                  Waze
                </Button>
              </Box>
            </Flex>
          </Section>

          <Section id="schedule">
            <Text as="h2">
              <FormattedMessage id="schedule" />
            </Text>

            <dl>
              <dt>
                <FormattedMessage id="ceremony" />
              </dt>
              <dd>
                <FormattedMessage id="ceremony_details" />
              </dd>

              <dt>
                <FormattedMessage id="reception" />
              </dt>
              <dd>
                <FormattedMessage id="reception_details" />
              </dd>
            </dl>
          </Section>

          <Section id="accommodations">
            <Text as="h2">
              <FormattedMessage id="accommodations" />
            </Text>

            <Text as="p">
              <FormattedMessage id="accommodation_details1" />
              <Link href="sms://+15626557028">714-635-9000</Link>{" "}
              <FormattedMessage id="accommodation_details2" />
            </Text>
          </Section>

          <Section id="notifications">
            <Text as="h2">
              <FormattedMessage id="notifications" />
            </Text>

            <Text as="p">
              <FormattedMessage id="text" /> "<strong>Hi</strong>"{" "}
              <FormattedMessage id="to" />{" "}
              <Link href="sms://+15626557028">562-655-7028</Link>{" "}
              <FormattedMessage id="sms_instruction" />
            </Text>
          </Section>

          <Section id="contact">
            <Text as="h2">
              <FormattedMessage id="contact" />
            </Text>

            <Text as="p">
              <FormattedMessage id="contact_details" />
            </Text>

            <Flex as="address" flexWrap="wrap">
              <Box width={[1, 1, 0.5]} mb={2}>
                <Flex
                  css={{ textAlign: "left" }}
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <Img fixed={props.data.coreyImage.childImageSharp.fixed} />
                  <Box as="dl" m={0}>
                    <dt>Corey</dt>
                    <Box as="dd" m={0}>
                      <Link href="mailto:hello@coreybruyere.com">
                        hello@coreybruyere.com
                      </Link>
                    </Box>
                  </Box>
                </Flex>
              </Box>

              <Box width={[1, 1, 0.5]} mb={2}>
                <Flex
                  css={{ textAlign: "left" }}
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <Img fixed={props.data.toriImage.childImageSharp.fixed} />
                  <Box as="dl" m={0}>
                    <dt>Tori</dt>
                    <Box as="dd" m={0}>
                      <Link href="mailto:victoria.tombor@gmail.com">
                        victoria.tombor@gmail.com
                      </Link>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Section>
        </Container>
      </Main>
    </React.Fragment>
  </Layout>
);

export default DetailsPage;

export const pageQuery = graphql`
  query {
    toriImage: file(relativePath: { eq: "contact-tori.png" }) {
      childImageSharp {
        fixed(width: 108, height: 108) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    coreyImage: file(relativePath: { eq: "contact-corey.png" }) {
      childImageSharp {
        fixed(width: 108, height: 108) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
