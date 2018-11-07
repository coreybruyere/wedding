import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { Layout, Container } from "../components/common";
import SEO from "../components/common/SEO";
import Header from "../components/theme/Header";

const RSVPPage = () => (
  <Layout>
    <React.Fragment>
      <SEO title="rsvp" />
      <Header />
      <Welcome as={Container}>
        <h2>
          <FormattedMessage id="rsvp" />
        </h2>

        <form name="rsvp" method="POST" netlify>
          <input type="hidden" name="form-name" value="rsvp" />
          <p>
            <label>
              Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Email: <input type="text" name="name" />
            </label>
          </p>

          <fieldset>
            <legend>
              Will you and your invitee(s) be able to make it to the wedding?
            </legend>
            <label>
              {" "}
              <input type="radio" />
              Yes
            </label>
            <label>
              {" "}
              <input type="radio" />
              No
            </label>
          </fieldset>

          <p>
            <label>
              Message: <textarea name="message" />
            </label>
          </p>
          <div data-netlify-recaptcha />
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Welcome>
    </React.Fragment>
  </Layout>
);

const Welcome = styled.div`
  padding: 2rem 0;
`;

export default RSVPPage;
