import styled, { css } from "styled-components";
import { Box } from "rebass";

export const Section = styled(Box)`
  text-align: center;
  border-bottom: 1px solid rgba(253, 0, 34, 0.25098);
`;

Section.defaultProps = {
  pt: 5,
  pb: 4,
  as: "section"
};
