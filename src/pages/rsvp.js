import React from "react";
import styled from "styled-components";
import { Flex, Box, Text, Heading } from "rebass";
import NetlifyForm from "react-netlify-form";
import { FormattedMessage } from "react-intl";
import {
  Layout,
  Container,
  Field,
  Input,
  Label,
  Link,
  Button
} from "../components/common";
import SEO from "../components/common/SEO";
import Header from "../components/theme/Header";

const RSVPPage = () => (
  <Layout>
    <React.Fragment>
      <SEO title="rsvp" />
      <Header />
      <Welcome as={Container}>
        <Heading as="h1">
          <FormattedMessage id="rsvp" />
        </Heading>

        <NetlifyForm name="Contact Form">
          {({ loading, error, success }) => (
            <div>
              {loading && <div>Loading...</div>}
              {error && (
                <div>
                  Your information was not sent. Please try again later or
                  <Link href="mailto:hello@coreybruyere.com">
                    email Corey
                  </Link>{" "}
                  and tell him how awful he is at building websites.
                </div>
              )}
              {success && (
                <div>
                  Thank you for your RSVP! Feel free to contact us if you have
                  any questions!
                </div>
              )}
              {!loading &&
                !success && (
                  <Flex mx={-2} flexWrap="wrap">
                    <Box px={2} width={1 / 2}>
                      <Field>
                        <Label>
                          <Text fontSize={1} fontWeight="bold" color="#616161">
                            First Name
                          </Text>
                          <input type="text" name="first-name" required />
                        </Label>
                      </Field>
                    </Box>
                    <Box px={2} width={1 / 2}>
                      <Field>
                        <Label>
                          <Text fontSize={1} fontWeight="bold" color="#616161">
                            Last Name
                          </Text>
                          <input type="text" name="last-name" required />
                        </Label>
                      </Field>
                    </Box>
                    <Box px={2} width={1 / 2}>
                      <fieldset>
                        <legend>Will you be attending?</legend>
                        <Field>
                          <Label>
                            <input
                              type="radio"
                              id="yes"
                              name="attend"
                              value="yes"
                              checked
                              required
                            />
                            Yes
                          </Label>
                        </Field>
                        <Field>
                          <Label>
                            <input
                              type="radio"
                              id="no"
                              name="attend"
                              value="no"
                              checked
                            />
                            No
                          </Label>
                        </Field>
                      </fieldset>
                    </Box>
                    <Box px={2} width={1}>
                      <Field>
                        <Label>
                          <Text fontSize={1} fontWeight="bold" color="#616161">
                            Full Names of Additional Guests
                          </Text>
                          <Field>
                            <textarea
                              name="Message"
                              placeholder="Comma-separated list of names"
                            />
                          </Field>
                        </Label>
                      </Field>
                    </Box>
                    <Box px={2} width={1}>
                      <Field>
                        <Label>
                          <Text fontSize={1} fontWeight="bold" color="#616161">
                            Song Requests
                          </Text>
                          <Field>
                            <textarea name="Message" />
                          </Field>
                        </Label>
                      </Field>
                    </Box>
                    <Box px={2} width={1}>
                      <Button type="submit">Submit</Button>
                    </Box>
                  </Flex>
                )}
            </div>
          )}
        </NetlifyForm>
      </Welcome>
    </React.Fragment>
  </Layout>
);

const Welcome = styled.div`
  padding: 2rem 0;
`;

export default RSVPPage;
