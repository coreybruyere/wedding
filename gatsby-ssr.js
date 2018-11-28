const React = require('react')

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <noscript key="noscript">Your browser does not support JavaScript! Please contact Corey for any questions or RSVP's @ <a href="mailto:hello@coreybruyere.com" target="_top">hello@coreybruyere.com</a></noscript>,
  ])
}
