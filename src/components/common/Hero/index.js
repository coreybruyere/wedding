import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Text, Flex } from "rebass";
import { FormattedMessage } from "react-intl";
import { Container } from "../";

const Copy = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  color: #fff;
  width: 100%;

  @media only screen and (min-width: 48em) {
    width: calc(100% - 29vw);
  }
`;

const Image = styled(Img)`
  width: 100%;
  height: 100vh;
  position: relative;

  &:after {
    content: "";
    background-color: #000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    @media only screen and (min-width: 48em) {
      display: none;
    }
  }
`;

const Inline = styled(Flex)`
  display: inline-flex;
  width: 100%;
  text-align: center;

  @media only screen and (min-width: 48em) {
    width: auto;
    text-align: left;
  }
`;

export const Hero = ({ image }) => (
  <>
    <Image fluid={image} />

    <Copy alignItems="center">
      <Container mr="auto" ml={0} hero>
        <Inline flexDirection="column">
          <Text fontSize={[6, 8]} as="h1">
            <FormattedMessage id="corey-tori" />
          </Text>
          <Flex
            justifyContent={["space-around", "space-around", "space-between"]}
          >
            <Text fontSize={[3, 4]} as="h2">
              6/30/2019
            </Text>
            <Text fontSize={[3, 4]} as="h2">
              Fullerton, CA
            </Text>
          </Flex>
        </Inline>
      </Container>
    </Copy>
  </>
);
