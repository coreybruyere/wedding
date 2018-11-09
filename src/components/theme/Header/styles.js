import styled, { css } from "styled-components";
import { Flex } from "rebass";

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

export const StyledHeader = styled.header.attrs({
  role: "banner"
})`
  background-color: red;

  @media only screen and (min-width: 48em) {
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

export const Navbar = styled(Flex)``;

export const Links = styled(Flex)`
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 400;
    margin: 0 1rem;
    outline: none;
  }
`;

export const Logo = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  outline: none;
`;
