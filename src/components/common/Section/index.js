import styled, { css } from "styled-components";
import { Box } from "rebass";

export const Section = styled(Box)`
  text-align: center;
  border-bottom: 1px solid rgba(253, 0, 34, 0.25098);

  &:first-of-type {
    padding-top: 0;
  }
`;

Section.defaultProps = {
  pt: 5,
  px: [0, 3, 5],
  pb: 4,
  as: "section"
};
