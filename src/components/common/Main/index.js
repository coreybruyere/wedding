import styled, { css } from "styled-components";
import { Box } from "rebass";

const heroStyle = `
  padding-top: 0;
  padding-bottom: 0;
  height: 100vh;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
`;

const pageStyle = `
  @media only screen and (min-width: 112em) {
    &:after {
      content: "That's a MASSIVE monitor. Maybe scale your browser down so you can see everything 😬";
      display: block;
      font-family: "Satisfy", cursive;
      font-size: 1.5rem;
      padding-left: 2rem;
      padding-top: 2rem;
    }
  }
`;

export const Main = styled(Box).attrs({
  role: "main"
})`
  ${props =>
    props.hero
      ? css`
          ${heroStyle}
        `
      : css`
          ${pageStyle}
        `}
`;

Main.defaultProps = {
  pt: 4,
  pb: 4,
  as: "main"
};
