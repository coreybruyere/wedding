import React from "react";
import { Flex, Box, Text } from "rebass";
import { navigate } from "gatsby-link";
import { FormattedMessage } from "react-intl";
import {
  Layout,
  Container,
  Main,
  Fieldset,
  Field,
  Label,
  Button,
  Input,
  Textarea,
  Radio
} from "../components/common";
import SEO from "../components/common/SEO";
import Header from "../components/theme/Header";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const count = str => {
  const length = str.split(",").length;
  return length;
};

class RSVPPage extends React.Component {
  state = {
    attend: ""
  };

  handleOptionChange = e => {
    console.log(e);
    this.setState({
      attend: e.target.value
    });
    console.log(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        // "guest-count": !this.state.guests ? null : count(this.state.guests),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <React.Fragment>
          <SEO title="rsvp" />
          <Header />
          <Main>
            <Container>
              <Text as="h1">
                <FormattedMessage id="rsvp" />
              </Text>

              <form
                name="rsvp"
                method="post"
                action="/rsvp-success/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <Input type="hidden" name="form-name" value="rsvp" />

                <Input
                  type="hidden"
                  name="bot-field"
                  onChange={this.handleChange}
                />

                <Flex mx={-2} flexWrap="wrap">
                  <Box px={2} width={[1, 1, 6 / 8]}>
                    <Field>
                      <Label>
                        <Text
                          fontSize="smaller"
                          fontWeight="bold"
                          color="#403b32"
                        >
                          <FormattedMessage id="names" />
                        </Text>
                        <Input
                          type="text"
                          name="names"
                          onChange={this.handleChange}
                          required
                          placeholder="Full names of guests"
                        />
                      </Label>
                    </Field>
                  </Box>
                  <Box px={2} width={[1, 1, 2 / 8]}>
                    <Field>
                      <Label>
                        <Text
                          fontSize="smaller"
                          fontWeight="bold"
                          color="#403b32"
                        >
                          <FormattedMessage id="total_attendees" />
                        </Text>
                        <Input
                          type="number"
                          name="total-guests"
                          onChange={this.handleChange}
                          required
                        />
                      </Label>
                    </Field>
                  </Box>
                  <Box px={2} width={1}>
                    <Fieldset>
                      <legend>
                        <Text
                          fontSize="smaller"
                          fontWeight="bold"
                          color="#403b32"
                        >
                          <FormattedMessage id="will_you_attend" />
                        </Text>
                      </legend>
                      <Flex justifyContent="space-around">
                        <Field>
                          <Label flexDirection="row">
                            <Radio
                              type="radio"
                              id="yes"
                              name="attend"
                              value="yes"
                              onChange={this.handleOptionChange}
                            />
                            <Text
                              fontSize="smaller"
                              fontWeight="bold"
                              color="#403b32"
                            >
                              <FormattedMessage id="yes" />
                            </Text>
                          </Label>
                        </Field>
                        <Field>
                          <Label flexDirection="row">
                            <Radio
                              type="radio"
                              id="no"
                              name="attend"
                              value="no"
                              onChange={this.handleOptionChange}
                            />
                            <Text
                              fontSize="smaller"
                              fontWeight="bold"
                              color="#403b32"
                            >
                              <FormattedMessage id="no" />
                            </Text>
                          </Label>
                        </Field>
                      </Flex>
                    </Fieldset>
                  </Box>

                  <Box px={2} width={[1, 1, 1 / 2]}>
                    <Field>
                      <Label>
                        <Text
                          fontSize="smaller"
                          fontWeight="bold"
                          color="#403b32"
                        >
                          <FormattedMessage id="song_requests" />
                        </Text>
                        <Field>
                          <Textarea name="songs" onChange={this.handleChange} />
                        </Field>
                      </Label>
                    </Field>
                  </Box>
                  <Box px={2} width={[1, 1, 1 / 2]}>
                    <Field>
                      <Label>
                        <Text
                          fontSize="smaller"
                          fontWeight="bold"
                          color="#403b32"
                        >
                          <FormattedMessage id="message" />
                        </Text>
                        <Field>
                          <Textarea name="songs" onChange={this.handleChange} />
                        </Field>
                      </Label>
                    </Field>
                  </Box>
                  <Box px={2} width={1}>
                    <Flex justifyContent="flex-end" width={1}>
                      <Button type="submit">
                        <FormattedMessage id="submit" />
                      </Button>
                    </Flex>
                  </Box>
                </Flex>
              </form>
            </Container>
          </Main>
        </React.Fragment>
      </Layout>
    );
  }
}

export default RSVPPage;
