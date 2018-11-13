import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Heading } from "rebass";
import { FormattedMessage } from "react-intl";
import { Container } from "../";

const Copy = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: calc(100% - 29vw);
`;

const Image = styled(Img)`
  width: 100%;
  height: 100vh;
`;

export const Hero = ({ image }) => (
  <>
    <Image fluid={image} />

    <Copy>
      <Container hero>
        <Heading as="h1">
          <FormattedMessage id="welcome" />
        </Heading>
      </Container>
    </Copy>
  </>
);
