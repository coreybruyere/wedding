import React from "react";
import { compose, withStateHandlers } from "recompose";
import { Select } from "../../common";
import styled from "styled-components";

const SelectWrap = styled.div`
  margin-left: -32px;
  margin-right: -32px;
  margin-bottom: -32px;
  overflow: hidden;
  color: #fff;

  select {
    margin-bottom: 0;
    border: 0;
    border-radius: 0;
    background-color: #b59349;
    color: #fff;
  }
`;

const SelectLanguage = ({ selectLanguage, lang }) => (
  <SelectWrap>
    <Select value={lang} onChange={e => selectLanguage(e.target.value)}>
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
