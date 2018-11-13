import styled, { css } from "styled-components";
import { Box } from "rebass";
import { Container } from "./";

const heroStyle = `
  padding-top: 0;
  padding-bottom: 0;
  height: 100vh;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
`;

export const Main = styled(Box).attrs({
  role: "main"
})`
  ${props =>
    props.hero
      ? css`
          ${heroStyle}
        `
      : ""}
`;

Main.defaultProps = {
  pt: 4,
  pb: 4,
  as: "main"
};
