import styled from "styled-components";
import { Box } from "rebass";

export const Fieldset = styled(Box)`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  color: inherit;
  font-size: 1em;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: #c3c3c3;
  padding-top: 0.95rem;
  padding-bottom: 0.95rem;
  padding-left: 0.85rem;
  padding-right: 0.85rem;
`;

Fieldset.defaultProps = {
  as: "fieldset"
};
