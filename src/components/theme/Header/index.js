import React from "react";
import { Link } from "gatsby";
import { Box, Flex } from "rebass";
import { FormattedMessage } from "react-intl";
import { Context, Container, Count } from "../../common";
import SelectLanguage from "./SelectLanguage";
import { Navbar, Link as LinkItem, Head, HeadTitle } from "./styles";

const Header = ({ hero }) => (
  <Context.Consumer>
    {({ toggleLanguage, lang }) => (
      <Head hero={hero} id="header">
        <Navbar flexDirection="column" py={4} as={Container}>
          <Flex flexDirection="column" alignItems="center">
            <HeadTitle>Our Wedding</HeadTitle>
          </Flex>
          <Count date={`2019-06-30T00:00:00`} />
          <Flex
            flexDirection={["row", "row", "column"]}
            flexWrap={["wrap", "wrap", "nowrap"]}
            justifyContent={["center", "space-around", "center"]}
            mt={[4, 4, "auto"]}
            pb={[0, 0, 5]}
            alignItems="center"
          >
            <LinkItem as={Link} to="/">
              <FormattedMessage id="home" />
            </LinkItem>
            <LinkItem as={Link} to="/rsvp">
              <FormattedMessage id="rsvp" />
            </LinkItem>
            <LinkItem as={Link} to="/registry">
              <FormattedMessage id="registry" />
            </LinkItem>
            <LinkItem as={Link} to="/details">
              <FormattedMessage id="wedding details" />
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
