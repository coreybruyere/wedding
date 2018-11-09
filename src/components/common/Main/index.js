import styled, { css } from "styled-components";
import { Box } from "rebass";

const heroStyle = `
  background-color: beige;
  height: 100vh;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
`;

export const Main = styled(Box).attrs({
  role: "main"
})`
  background-color: #fff;

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
