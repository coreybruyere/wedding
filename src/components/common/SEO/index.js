import React from "react";
import Helmet from "react-helmet";
import { injectIntl } from "react-intl";
import { Context } from "../Context";
import config from "../../../../data/config";

const SEO = ({ location = "", title, intl: { formatMessage } }) => (
  <Context.Consumer>
    {({ lang }) => {
      const structuredDataOrganization = `{ 
				"@context": "http://schema.org",
				"@type": "Organization",
				"legalName": "${config.legalName}",
				"url": "${config.url}",
				"logo": "${config.logo}",
				"foundingDate": "${config.foundingDate}",
				"founders": [{
					"@type": "Person",
					"name": "${config.legalName}"
				}],
				"contactPoint": [{
					"@type": "ContactPoint",
					"email": "${config.contact.email}",
					"telephone": "${config.contact.phone}",
					"contactType": "customer service"
				}],
				"address": {
					"@type": "PostalAddress",
					"addressLocality": "${config.address.city}",
					"addressRegion": "${config.address.region}",
					"addressCountry": "${config.address.country}",
					"postalCode": "${config.address.zipCode}"
				},
				"sameAs": [
					"${config.socialLinks.twitter}",
					"${config.socialLinks.google}",
					"${config.socialLinks.youtube}",
					"${config.socialLinks.linkedin}",
					"${config.socialLinks.instagram}",
					"${config.socialLinks.github}"
				]
			}`;
      return (
        <Helmet>
          <html lang={lang} dir={"ltr"} />
          <meta
            name="google-site-verification"
            content={config.googleVerification}
          />
          <link rel="shortcut icon" href={config.favicon} />

          <meta name="robots" content="index, follow" />
          <meta name="description" content={config.description} />
          <meta name="image" content={config.cover} />

          <meta property="og:url" content={`${config.url}${location}`} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={config.title} />
          <meta property="og:description" content={config.description} />
          <meta property="og:image" content={config.cover} />
          <meta property="fb:app_id" content={config.social.facebook} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content={config.social.twitter} />
          <meta name="twitter:site" content={config.socialLinks.twitter} />
          <meta name="twitter:title" content={config.title} />
          <meta name="twitter:description" content={config.description} />
          <meta name="twitter:image:src" content={config.cover} />
          <script type="application/ld+json">
            {structuredDataOrganization}
          </script>
          <link rel="publisher" href={config.socialLinks.google} />
          <title>{formatMessage({ id: title })}</title>
        </Helmet>
      );
    }}
  </Context.Consumer>
);

export default injectIntl(SEO);
