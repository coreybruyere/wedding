import React from "react";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import { addLocaleData, IntlProvider } from "react-intl";
import localEng from "../../../../data/en.json";
import localEs from "../../../../data/es.json";
import { Context } from "../Context";
import Provider from "./Provider";
import { Global } from "./styles";
import "./layout.css";

addLocaleData([...en, ...es]);

const messages = {
  en: localEng,
  es: localEs
};

const Layout = ({ children }) => (
  <Provider>
    <Context.Consumer>
      {({ lang }) => (
        <IntlProvider locale={lang} messages={messages[lang]}>
          <Global lang={lang}>{children}</Global>
        </IntlProvider>
      )}
    </Context.Consumer>
  </Provider>
);

export { Layout };
