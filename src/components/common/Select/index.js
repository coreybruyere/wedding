import React from "react";
import styled from "styled-components";
import { Flex } from "rebass";
import { Input } from "../Input";

const SelectField = styled(Input)``;

const DropdownIcon = styled.svg`
  margin-left: -32px;
  pointer-events: none;
  flex: 0 0 auto;
`;

export const Select = props => (
  <Flex alignItems="center">
    <SelectField {...props} />
    <DropdownIcon
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentcolor"
    >
      <path d="M7.4,8l4.6,4.6L16.6,8L18,9.4l-6,6l-6-6L7.4,8z" />
    </DropdownIcon>
  </Flex>
);

Select.defaultProps = {
  as: "select"
};
