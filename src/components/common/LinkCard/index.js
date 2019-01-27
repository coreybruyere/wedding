import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Box, Card } from "rebass";
import { FormattedMessage } from "react-intl";

const AnimatedCard = styled(Card)`
  display: block;
  transition: transform 0.35s ease-in-out;
  overflow: hidden;
  cursor: pointer;

  &:first-of-type {
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
      transform: rotate(-1deg) scale(1.02);
    }
  }

  &:hover,
  &:active {
    z-index: 3;
  }

  @media only screen and (min-width: 72em) {
  }
`;

export const LinkCard = ({ image, href, children, ...rest }) => (
  <AnimatedCard
    mb={4}
    bg="#fff"
    color="#403b32"
    borderRadius={8}
    border="1px solid"
    borderColor="#c3c3c3"
    boxShadow="0 2px 16px rgba(0,0,0,0.25)"
    as="a"
    target="_blank"
    href={href}
    css={{ textDecoration: "none" }}
    {...rest}
  >
    <Img fluid={image} />
    <Box p={4}>{children}</Box>
  </AnimatedCard>
);
