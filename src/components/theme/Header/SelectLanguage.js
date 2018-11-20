import React from "react";
import { compose, withStateHandlers } from "recompose";
import { Select, Label } from "../../common";
import { uA11yHide } from "../../../utils/helpers"
import styled from "styled-components";

const SelectWrap = styled.div`
  margin-left: -32px;
  margin-right: -32px;
  margin-bottom: -32px;
  overflow: hidden;
  color: #454130;

  select {
    margin-bottom: 0;
    border: 0;
    border-radius: 0;
    background-color: #e2bc6a;
    color: #454130;
  }

  ${Label} {
    ${uA11yHide};
  }
`;

const SelectLanguage = ({ selectLanguage, lang }) => (
  <SelectWrap>
    <Label htmlFor="lang-select">Select language</Label>
    <Select
      value={lang}
      onChange={e => selectLanguage(e.target.value)}
      id="lang-select">
      <option value="en">English</option>
      <option value="es">Español</option>
    </Select>
  </SelectWrap>
);

const enhance = compose(
  withStateHandlers(props => ({ language: props.lang }), {
    selectLanguage: (values, { toggleLanguage }) => value => {
      toggleLanguage(value);
      return {
        language: value
      };
    }
  })
);

export default enhance(SelectLanguage);
