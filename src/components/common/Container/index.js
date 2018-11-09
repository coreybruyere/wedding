import styled from "styled-components";
import { Box } from "rebass";

export const Container = styled(Box)`
  max-width: 1024px;
  width: 100%;
`;
Container.defaultProps = {
  mx: "auto",
  px: 3
};
