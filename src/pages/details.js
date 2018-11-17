import React from "react";
import { Text } from "rebass";
import { FormattedMessage } from "react-intl";
import { Layout, Container, Main, Section } from "../components/common";
import SEO from "../components/common/SEO";
import Header from "../components/theme/Header";

const DetailsPage = () => (
  <Layout>
    <React.Fragment>
      <SEO title="wedding details" />
      <Header />
      <Main>
        <Container>
          <Text as="h1" mb={5}>
            <FormattedMessage id="wedding details" />
          </Text>

          <Section>
            <Text as="h2">
              {/* <FormattedMessage id="schedule" /> */}
              Venue
            </Text>

            <dl>
              {/* <FormattedMessage id="schedule" /> */}
              <dt>Wedding & Reception </dt>
              <dd>
                {" "}
                Hangar 21
                <br />
                3970 Artesia Ave.
                <br />
                Fullerton, CA 92833
              </dd>
            </dl>
          </Section>

          <Section>
            <Text as="h2">
              {/* <FormattedMessage id="schedule" /> */}
              Schedule
            </Text>

            <dl>
              <dt>Wedding</dt>
              <dd>[[Info & time for Wedding - Make sure to translate]]</dd>

              <dt>Reception</dt>
              <dd>[[Info & time for Wedding - Make sure to translate]]</dd>
            </dl>
          </Section>
        </Container>
      </Main>
    </React.Fragment>
  </Layout>
);

export default DetailsPage;
