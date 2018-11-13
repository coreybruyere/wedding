import React from "react";
import { Link } from "gatsby";
import { Box } from "rebass";
import { FormattedMessage } from "react-intl";
import { Context, Container } from "../../common";
import SelectLanguage from "./SelectLanguage";
import { Navbar, Links, Head, Logo } from "./styles";

const Header = ({ hero }) => (
  <Context.Consumer>
    {({ toggleLanguage, lang }) => (
      <Head hero={hero}>
        <Navbar
          flexDirection="column"
          py={4}
          pl="calc(32px + 12%);"
          as={Container}
        >
          <Logo as={Link} to="/">
            <FormattedMessage id="logo" />
          </Logo>
          <Links flexDirection="column" mt="auto" alignItems="center">
            <Link to="/rsvp">
              <FormattedMessage id="rsvp" />
            </Link>
            <Link to="/details">
              <FormattedMessage id="wedding details" />
            </Link>
            <Link to="/registry">
              <FormattedMessage id="registry" />
            </Link>
          </Links>
          <Box mt="auto">
            <SelectLanguage lang={lang} toggleLanguage={toggleLanguage} />
          </Box>
        </Navbar>
      </Head>
    )}
  </Context.Consumer>
);

export default Header;
