import React from "react";
import { Text } from "rebass";
import { FormattedMessage } from "react-intl";
import { Layout, Link, Container, Main, Section } from "../components/common";
import SEO from "../components/common/SEO";
import Header from "../components/theme/Header";

const DetailsPage = () => (
  <Layout>
    <React.Fragment>
      <SEO title="wedding_details" />
      <Header />
      <Main>
        <Container>
          <Text as="h1" mb={5}>
            <FormattedMessage id="wedding_details" />
          </Text>

          <Section>
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
          </Section>

          <Section>
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

          <Section>
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
        </Container>
      </Main>
    </React.Fragment>
  </Layout>
);

export default DetailsPage;
