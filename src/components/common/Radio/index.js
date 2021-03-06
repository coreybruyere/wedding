import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Label } from "../";

export const Radio = props => {
  const { checked, disabled, id } = props;

  return (
    <RadioWrap checked={checked} disabled={disabled}>
      <RadioInput
        type="radio"
        id={id}
        checked={checked}
        disabled={disabled}
        {...props}
      />
      <RadioIcon />
    </RadioWrap>
  );
};

const RadioIcon = styled.div`
  &:before {
    content: "";
    background: white;
    border-radius: 100%;
    border: 1px solid #c3c3c3;
    display: inline-block;
    width: 1.4rem;
    height: 1.4rem;
    position: relative;
    top: -0.1rem;
    margin-right: 0.75rem;
    vertical-align: top;
    cursor: pointer;
    text-align: center;
    transition: all 250ms ease;
  }
`;

const RadioWrap = styled.div`
  display: inline-block;
  &:hover {
    cursor: pointer;
    ${props => (props.checked || props.disabled ? null : `color: #f2ca6b;`)};
  }
`;

const RadioInput = styled.input`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: 0;
  &:focus {
    + ${RadioIcon} {
      &:before {
        outline: none;
        border-color: rgba(253, 0, 34, 0.25098);
      }
    }
  }
  &:checked {
    + ${RadioIcon} {
      &:before {
        background-color: #f2ca6b;
        box-shadow: inset 0 0 0 4px #fff;
      }
    }
  }
  &:disabled {
    + ${RadioIcon} {
      &:before {
        box-shadow: inset 0 0 0 4px #f1f1f1;
        border-color: #c3c3c3;
        background: #fff;
      }
    }
  }
`;
