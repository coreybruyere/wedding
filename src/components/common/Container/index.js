import styled from "styled-components";
import { Box } from "rebass";

export const Container = styled(Box)`
  max-width: 52em;
  width: 100%;
`;
Container.defaultProps = {
  ml: "auto",
  px: 4
};
