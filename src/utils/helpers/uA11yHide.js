import React from "react";
import styled from "styled-components";
import { Box } from "rebass";

export const uA11yHide = () => `
  position: absolute;
  height: 1px; width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`;

const Hide = styled(Box)`
  ${uA11yHide};
`;

export const A11yHideBox = ({children}) => (
  <Hide>{children}</Hide>
);

