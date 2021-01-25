import React from "react";
import styled from "styled-components";
import { Header } from "../../otherComponents/Header";
import { useStateValue } from "../../StateProvider";

const StyledHome = styled.section`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  height: 100vh;
`;

export const LandingPage = () => {
  const [{ theme }, dispatch] = useStateValue();

  const themeToggler = () => {
    dispatch({
      type: "TOGGLE_THEME",
    });
  };

  return (
    <StyledHome>
      <Header />
    </StyledHome>
  );
};
