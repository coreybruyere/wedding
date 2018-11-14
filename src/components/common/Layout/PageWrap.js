import styled from "styled-components";

export const PageWrap = styled.div`
  display: grid;
  grid-template-columns: 100%;

  @media only screen and (min-width: 48em) {
    // grid-template-columns: 71% 29%;
    grid-template-columns: 75% 25%;
  }
}
`;
