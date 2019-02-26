import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Flex, Card } from "rebass";
import { FormattedMessage } from "react-intl";

const AnimatedCard = styled(Card)`
  display: flex;
  flex-direction: column;
  transition: transform 0.35s ease-in-out, box-shadow 0.35s ease-in-out;
  overflow: hidden;
  cursor: pointer;

  /* &:first-of-type {
    transform: rotate(-1.35deg);
    z-index: 1;
  }

  &:last-of-type {
    transform: rotate(2deg);
  }

  &:first-of-type {
    &:hover,
    &:active {
      transform: rotate(-2.15deg) scale(1.04);
    }
  }

  &:last-of-type {
    &:hover,
    &:active {
      transform: rotate(1deg) scale(1.02);
    }
  } */

  &:hover,
  &:active {
    box-shadow: 0 2px 28px rgba(0,0,0,0.21);
  }

  @media only screen and (min-width: 72em) {
  }
`;

export const LinkCard = ({ image, href, children, ...rest }) => (
  <AnimatedCard
    mb={4}
    bg="#fff"
    color="#403b32"
    flex={1}
    // borderRadius={8}
    border="1px solid"
    borderColor="#c3c3c3"
    // boxShadow="0 2px 16px rgba(0,0,0,0.25)"
    as="a"
    target="_blank"
    href={href}
    css={{ textDecoration: "none" }}
    {...rest}
  >
    <Img fluid={image} />
    <Flex flexDirection={"column"} p={4} flex={1}>{children}</Flex>
  </AnimatedCard>
);
