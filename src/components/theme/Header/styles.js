import styled, { css } from "styled-components";
import { Flex, Text } from "rebass";

const heroStyle = `
  height: 100vh;
  grid-row-start: 1;
  grid-column-start: 2;
  z-index: 10;
`;

const pageStyle = `
  position: sticky;
  top: 0;
`;

export const Head = styled(Flex).attrs({
  role: "banner"
})`
  background-color: #f2ca74;

  @media only screen and (min-width: 52em) {
    order: 1;
    height: 100vh;

    ${props =>
      props.hero
        ? css`
            ${heroStyle}
          `
        : css`
            ${pageStyle}
          `}
  }
`;

export const HeadTitle = styled(Text)`
  transform: rotate(1deg);
`;

export const Navbar = styled(Flex)`
  height: 100%;
`;

export const Link = styled(Text)`
  position: relative;
  padding: 0 0.25rem;
  margin: 0 0.5rem 1.5rem;
  color: #40461b;
  text-decoration: none;
  font-weight: 400;
  outline: none;

  &:hover,
  &:focus {
    &:after {
      height: 0.65rem;
    }
  }

  &:after {
    content: "";
    position: absolute;
    height: 0.35rem;
    width: 110%;
    bottom: 0;
    left: -5%;
    right: -5%;
    transition: height 0.2s ease-in-out;
    background: repeating-linear-gradient(
      116deg,
      transparent,
      transparent 3%,
      rgba(253, 0, 34, 0.25098) 0,
      rgba(253, 0, 34, 0.18824) 97%,
      transparent 0,
      transparent
    );
  }
`;

export const Logo = styled.a`
  color: #403b32;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  outline: none;
`;

Head.defaultProps = {
  as: "header",
  alignItems: "center"
};

HeadTitle.defaultProps = {
  as: "h1",
  fontSize: 6,
  mb: 2
};

Navbar.defaultProps = {
  justifyContent: "center"
};
