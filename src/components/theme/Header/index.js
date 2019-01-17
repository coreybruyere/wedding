import React from "react";
import { Link } from "gatsby";
import { Box, Flex } from "rebass";
import { FormattedMessage } from "react-intl";
import { Context, Container, Count, Link as LinkItem } from "../../common";
import SelectLanguage from "./SelectLanguage";
import { Navbar, Head, HeadTitle } from "./styles";

const Header = ({ hero }) => (
  <Context.Consumer>
    {({ toggleLanguage, lang }) => (
      <Head hero={hero} id="header">
        <Navbar flexDirection="column" py={4} as={Container}>
          <Flex flexDirection="column" alignItems="center">
            <HeadTitle>
              <FormattedMessage id="our_wedding" />
            </HeadTitle>
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
            <LinkItem as={Link} mb={4} to="/">
              <FormattedMessage id="home" />
            </LinkItem>
            <LinkItem as={Link} mb={4} to="/rsvp">
              <FormattedMessage id="rsvp" />
            </LinkItem>
            <LinkItem as={Link} mb={4} to="/registry">
              <FormattedMessage id="registry" />
            </LinkItem>
            <LinkItem as={Link} mb={4} to="/details">
              <FormattedMessage id="wedding_details" />
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
