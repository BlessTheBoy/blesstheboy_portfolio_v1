import React from "react";
import styled from "styled-components";
import { Header } from "../../otherComponents/Header";
import { LandingText } from "../../otherComponents/LandingText";
import { ScrollIcon } from "../../otherComponents/ScrollIcon";
import { useStateValue } from "../../StateProvider";

const StyledHome = styled.section`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;

  .landingContent {
    padding: 0rem 4rem 1.5rem;
    flex: 1;
    display: flex
    align-items: center;
    justify-content: flex-start;
  }

  .landingContent__container {
    width: 100%;
    margin: 0 auto;
    max-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: flex-start
  }

  [data-id="scroll"]{
    position: absolute;
    bottom: 2rem;
    left: 50%;
    z-index: 5;
    width: 30px;
  }
`;

export const LandingPage = () => {
  const [{ theme }, dispatch] = useStateValue();

  return (
    <StyledHome>
      <Header />
      <main className="landingContent">
        <div className="landingContent__container">
          <LandingText />
        </div>
      </main>
      <ScrollIcon />
    </StyledHome>
  );
};
