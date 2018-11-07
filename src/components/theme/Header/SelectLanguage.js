import React from "react";
import { compose, withStateHandlers } from "recompose";

const SelectLanguage = ({ selectLanguage, lang }) => (
  <select value={lang} onChange={e => selectLanguage(e.target.value)}>
    <option value="en">English</option>
    <option value="es">Español</option>
  </select>
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
