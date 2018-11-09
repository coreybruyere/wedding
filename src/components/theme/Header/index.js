import React from "react";
import { Link } from "gatsby";
import { FormattedMessage } from "react-intl";
import { Context, Container } from "../../common";
import SelectLanguage from "./SelectLanguage";
import { Navbar, Links, StyledHeader, Logo } from "./styles";

const Header = ({ hero }) => (
  <Context.Consumer>
    {({ toggleLanguage, lang }) => (
      <StyledHeader hero={hero}>
        <Navbar flexDirection="column" py={4} as={Container}>
          <Logo as={Link} to="/">
            <FormattedMessage id="logo" />
          </Logo>
          <Links flexDirection="column" alignItems="center">
            <Link to="/rsvp">
              <FormattedMessage id="rsvp" />
            </Link>
            <Link to="/details">
              <FormattedMessage id="wedding details" />
            </Link>
            <Link to="/registry">
              <FormattedMessage id="registry" />
            </Link>
            {<SelectLanguage lang={lang} toggleLanguage={toggleLanguage} />}
          </Links>
        </Navbar>
      </StyledHeader>
    )}
  </Context.Consumer>
);

export default Header;
