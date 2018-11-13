import React from "react";
import { graphql } from "gatsby";
import { Layout, Main, Hero } from "../components/common";
import SEO from "../components/common/SEO";
import Header from "../components/theme/Header";

const IndexPage = props => (
  <Layout>
    <React.Fragment>
      <SEO title="welcome" />
      <Header hero />
      <Main hero>
        <Hero image={props.data.heroImage.childImageSharp.fluid} />
      </Main>
    </React.Fragment>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    heroImage: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
