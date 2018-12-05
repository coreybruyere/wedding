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
