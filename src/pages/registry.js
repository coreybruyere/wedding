import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { Layout, Container } from "../components/common";
import SEO from "../components/common/SEO";
import Header from "../components/theme/Header";

const RegistryPage = () => (
  <Layout>
    <React.Fragment>
      <SEO title="registry" />
      <Header />
      <Welcome as={Container}>
        <h2>
          <FormattedMessage id="registry" />
        </h2>
      </Welcome>
    </React.Fragment>
  </Layout>
);

const Welcome = styled.div`
  padding: 2rem 0;
`;

export default RegistryPage;
