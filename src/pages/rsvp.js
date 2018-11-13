import React from "react";
import { Flex, Box, Text, Heading } from "rebass";
import { navigate } from "gatsby-link";
import { FormattedMessage } from "react-intl";
import {
  Layout,
  Container,
  Main,
  Field,
  Label,
  Button
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
    console.log(e.target.value);
    this.setState({
      attend: e.target.value
    });
  };

  handleChange = e => {
    console.log(e.target.value);
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
        "guest-count": !this.state.guests ? null : count(this.state.guests),
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
              <Heading as="h1">
                <FormattedMessage id="rsvp" />
              </Heading>

              <form
                name="rsvp"
                method="post"
                action="/rsvp-success/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <input type="hidden" name="form-name" value="rsvp" />

                <input
                  type="hidden"
                  name="bot-field"
                  onChange={this.handleChange}
                />

                <Flex mx={-2} flexWrap="wrap">
                  <Box px={2} width={1 / 3}>
                    <Field>
                      <Label>
                        <Text fontSize={1} fontWeight="bold" color="#616161">
                          <FormattedMessage id="first_name" />
                        </Text>
                        <input
                          type="text"
                          name="first-name"
                          onChange={this.handleChange}
                          required
                        />
                      </Label>
                    </Field>
                  </Box>
                  <Box px={2} width={1 / 3}>
                    <Field>
                      <Label>
                        <Text fontSize={1} fontWeight="bold" color="#616161">
                          <FormattedMessage id="last_name" />
                        </Text>
                        <input
                          type="text"
                          name="last-name"
                          onChange={this.handleChange}
                          required
                        />
                      </Label>
                    </Field>
                  </Box>
                  <Box px={2} width={1 / 3}>
                    <Field>
                      <Label>
                        <Text fontSize={1} fontWeight="bold" color="#616161">
                          <FormattedMessage id="email" />
                        </Text>
                        <input
                          type="text"
                          name="email"
                          onChange={this.handleChange}
                        />
                      </Label>
                    </Field>
                  </Box>
                  <Box px={2} width={1}>
                    <fieldset>
                      <legend>
                        <Text fontSize={1} fontWeight="bold" color="#616161">
                          <FormattedMessage id="will_you_attend" />
                        </Text>
                      </legend>
                      <Field>
                        <Label>
                          <input
                            type="radio"
                            id="yes"
                            name="attend"
                            value="yes"
                            checked={this.state.attend === "yes"}
                            onChange={this.handleOptionChange}
                          />
                          <FormattedMessage id="yes" />
                        </Label>
                      </Field>
                      <Field>
                        <Label>
                          <input
                            type="radio"
                            id="no"
                            name="attend"
                            value="no"
                            checked={this.state.attend === "no"}
                            onChange={this.handleOptionChange}
                            required
                          />
                          <FormattedMessage id="no" />
                        </Label>
                      </Field>
                    </fieldset>
                  </Box>
                  <Box px={2} width={1 / 2}>
                    <Field>
                      <Label>
                        <Text fontSize={1} fontWeight="bold" color="#616161">
                          <FormattedMessage id="additional_guests" />
                        </Text>
                        <Field>
                          <textarea
                            name="guests"
                            placeholder="Comma-separated list of names"
                            onChange={this.handleChange}
                          />
                          <input type="text" name="guest-count" type="hidden" />
                        </Field>
                      </Label>
                    </Field>
                  </Box>
                  <Box px={2} width={1 / 2}>
                    <Field>
                      <Label>
                        <Text fontSize={1} fontWeight="bold" color="#616161">
                          <FormattedMessage id="song_requests" />
                        </Text>
                        <Field>
                          <textarea name="songs" onChange={this.handleChange} />
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
