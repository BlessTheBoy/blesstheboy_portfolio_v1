import React, { createRef, useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { AsideImage } from "../../otherComponents/AsideImage";
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
  overflow: hidden;

  .landingContent {
    padding: 0rem 4rem 1.5rem;
    flex: 1;
    display: flex
    align-items: center;
    justify-content: flex-start;
    position: relative;
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
  [data-id="asideImage"]{
    position: absolute;
    right: 4rem;
    top: 50%;    
    transform: translateY(-50%);
    width: 420px;
    // z-index: 1;
  }

  @media only screen and (max-width: 880px){
    [data-id="asideImage"]{
      width: 320px;
    }
  }
  @media only screen and (max-width: 800px){
    .landingContent {
      padding: 0rem 2.5rem 1.5rem;
    }
  }
`;

export const LandingPage = () => {
  const [{ theme }, dispatch] = useStateValue();
  const hederRef = createRef();
  const scrollRef = createRef();

  useEffect(() => {
    console.log(hederRef.current, scrollRef.current);
    gsap.from([hederRef.current, scrollRef.current], {
      opacity: 0,
      duration: 4.5,
      delay: 3.5,
    });
  }, []);
  return (
    <StyledHome>
      <Header ref={hederRef} />
      <main className="landingContent">
        <div className="landingContent__container">
          <LandingText />
          <AsideImage />
        </div>
      </main>
      <ScrollIcon ref={scrollRef} />
    </StyledHome>
  );
};
