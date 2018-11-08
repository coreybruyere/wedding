import React from "react";
import styled from "styled-components";
import { Heading } from "rebass";
import { FormattedMessage } from "react-intl";
import { Layout, Container } from "../components/common";
import SEO from "../components/common/SEO";
import Header from "../components/theme/Header";

const IndexPage = () => (
  <Layout>
    <React.Fragment>
      <SEO title="welcome" />
      <Header />
      <Welcome as={Container}>
        <Heading as="h1">
          <FormattedMessage id="welcome" />
        </Heading>
      </Welcome>
    </React.Fragment>
  </Layout>
);

const Welcome = styled.div`
  padding: 2rem 0;
`;

export default IndexPage;
