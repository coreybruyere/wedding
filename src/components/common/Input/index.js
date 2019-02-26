import styled from "styled-components";
import { Box } from "rebass";

export const Input = styled(Box)`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  color: inherit;
  font-size: 1em;
  background-color: #fbf9ed;
  /* border-radius: 3px; */
  border-width: 1px;
  border-style: solid;
  border-color: #c3c3c3;
  padding-top: 0.95rem;
  padding-bottom: 0.95rem;
  padding-left: 0.85rem;
  padding-right: 0.85rem;
  ::placeholder {
    color: gray;
  }
  ::-ms-clear {
    display: none;
  }
  &:focus,
  &:active {
    border-width: 1px;
    border-color: #f2ca6b;
    outline: none;
    box-shadow: 0 0 1px 2px #f2ca6b;
  }
`;

Input.defaultProps = {
  as: "input",
  mb: 4
};
