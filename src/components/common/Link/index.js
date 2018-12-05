import styled from "styled-components";

export const Link = styled.a`
  position: relative;
  padding: 0 0.25rem;
  margin: 0 0.5rem 1.5rem;
  color: #40461b;
  text-decoration: none;
  font-weight: 400;
  outline: none;

  &:hover,
  &:focus {
    &:after {
      height: 0.65rem;
    }
  }

  &:after {
    content: "";
    position: absolute;
    height: 0.35rem;
    width: 110%;
    bottom: 0;
    left: -5%;
    right: -5%;
    transition: height 0.2s ease-in-out;
    background: repeating-linear-gradient(
      116deg,
      transparent,
      transparent 3%,
      rgba(253, 0, 34, 0.25098) 0,
      rgba(253, 0, 34, 0.18824) 97%,
      transparent 0,
      transparent
    );
  }
`;
