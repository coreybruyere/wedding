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

        <form name="contact" method="POST" netlify>
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Your Role:{" "}
              <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" />
            </label>
          </p>
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
