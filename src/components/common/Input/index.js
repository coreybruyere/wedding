import styled from "styled-components";

export const Input = styled.input`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  color: inherit;
  font-size: 1em;
  background-color: #fbf9ed;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: #413c31;
  padding-top: 0.95rem;
  padding-bottom: 0.95rem;
  padding-left: 0.85rem;
  padding-right: 0.85rem;
  margin: 0;
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
    outline: #f2ca6b;
  }
`;
