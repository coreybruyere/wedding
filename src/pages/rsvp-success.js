import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { Heading } from "rebass";
import { FormattedMessage } from "react-intl";
import { Layout, Container } from "../components/common";
import SEO from "../components/common/SEO";
import Header from "../components/theme/Header";

const SuccessPage = () => (
  <Layout>
    <React.Fragment>
      <SEO title="registry" />
      <Header />
      <Welcome as={Container}>
        <Heading as="h1">
          <FormattedMessage id="thanks!" />
        </Heading>
        <p>
          Thank you for your RSVP! Feel free to contact us if you have any
          questions!
        </p>
      </Welcome>
    </React.Fragment>
  </Layout>
);

const Welcome = styled.div`
  padding: 2rem 0;
`;

export default SuccessPage;
