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

export const Head = styled(Flex).attrs({
  role: "banner"
})`
  background-image: linear-gradient(
    90deg,
    transparent 8%,
    #f2ca74 12%,
    #f2ca74 100%
  );
  // background-color: #f2ca74;

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

export const Navbar = styled(Flex)`
  height: 100%;
`;

export const Links = styled(Flex)`
  a {
    padding: 0.5rem;
    color: #40461b;
    text-decoration: none;
    font-weight: 400;
    font-size: 140%;
    outline: none;
  }
`;

export const Logo = styled.a`
  color: #40461b;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  outline: none;
`;

Head.defaultProps = {
  as: "header",
  alignItems: "center"
};

Navbar.defaultProps = {
  justifyContent: "center"
};
