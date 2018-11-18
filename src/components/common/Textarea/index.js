import styled from "styled-components";
import { Input } from "../Input";

export const Textarea = styled(Input)`
  min-height: 5rem;
`;

Textarea.defaultProps = {
  as: "textarea",
  mb: 4
};
