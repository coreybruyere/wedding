import React from "react";
import styled, { keyframes } from "styled-components";
import Img from "gatsby-image";
import { Text, Flex } from "rebass";
import { FormattedMessage } from "react-intl";
import { Container } from "../";

const bounce = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(0, .5rem, 0);
  }
`;

const Copy = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  color: #fff;
  width: 100%;

  @media only screen and (min-width: 52em) {
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

    @media only screen and (min-width: 52em) {
      display: none;
    }
  }
`;

const Inline = styled(Flex)`
  display: inline-flex;
  width: 100%;
  text-align: center;

  @media only screen and (min-width: 52em) {
    width: auto;
    text-align: left;
  }
`;

const DropdownLink = styled.a`
  position: absolute;
  bottom: 1rem;
  animation: ${bounce} 0.75s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(.5, 0.05, 1, .5);
  animation-iteration-count: infinite;

  @media only screen and (min-width: 52em) {
    display: none;
  }
`;

export const Hero = ({ image }) => (
  <>
    <Image fluid={image} />

    <Copy flexDirection="column" justifyContent="center" alignItems="center">
      <Container mr="auto" ml={0} hero>
        <Inline flexDirection="column" pt={[3, 3, 0]}>
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

      <DropdownLink href="#header">
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="#fff"
        >
          <path d="M7.4,8l4.6,4.6L16.6,8L18,9.4l-6,6l-6-6L7.4,8z" />
        </svg>
      </DropdownLink>
    </Copy>
  </>
);
