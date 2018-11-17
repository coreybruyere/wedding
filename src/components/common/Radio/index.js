import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Radio = props => {
  const { checked, disabled } = props;

  return (
    <RadioWrap checked={checked} disabled={disabled}>
      <RadioInput type="radio" {...props} />
    </RadioWrap>
  );
};

const RadioWrap = styled.div`
  display: inline-block;
  color: blue;
  &:hover {
    ${props => (props.checked || props.disabled ? null : `color: red;`)};
  }
`;

const RadioInput = styled.input`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: 0;
  &:focus {
    box-shadow: none;
  }
  &:checked ~ svg {
    color: blue;
  }
  &:disabled ~ svg {
    color: gray;
  }
`;
