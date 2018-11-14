import React from "react";
import { Link } from "gatsby";
import { Box, Flex, Text } from "rebass";
import { FormattedMessage } from "react-intl";
import { Context, Container } from "../../common";
import SelectLanguage from "./SelectLanguage";
import { Navbar, Link as LinkItem, Head, Logo } from "./styles";

const Header = ({ hero }) => (
  <Context.Consumer>
    {({ toggleLanguage, lang }) => (
      <Head hero={hero}>
        <Navbar flexDirection="column" py={4} as={Container}>
          <Logo as={Link} to="/">
            <Text fontSize={4} as="h1">
              C & T
            </Text>
          </Logo>
          <Flex flexDirection="column" mt="auto" alignItems="center">
            <LinkItem as={Link} to="/rsvp">
              <FormattedMessage id="rsvp" />
            </LinkItem>
            <LinkItem as={Link} to="/details">
              <FormattedMessage id="wedding details" />
            </LinkItem>
            <LinkItem as={Link} to="/registry">
              <FormattedMessage id="registry" />
            </LinkItem>
          </Flex>
          <Box mt="auto">
            <SelectLanguage lang={lang} toggleLanguage={toggleLanguage} />
          </Box>
        </Navbar>
      </Head>
    )}
  </Context.Consumer>
);

export default Header;
