import styled from "styled-components";
import { gsap } from "gsap";
import { AnimatedTitle } from "./AnimatedTitle";
import { HomeSocials } from "./HomeSocials";
import { useEffect, useRef } from "react";

const StyledLandingText = styled.div`
  padding: 1rem;
  padding-top: .5rem
  width: fit-content;
  position: relative;
  z-index: 30;

  p.landingText__intro {
    width: fit-content;
    font-size: 1.2rem;
    position: relative;
    z-index: 0;
  }
  p.landingText__intro div {
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.body};
    z-index: 100;
    transform-origin: 100% 0;

  }

  p.landingText__description {
    font-size: 0.9rem;
    width: 60%;
    padding-left: 5px;
    color: ${(props) => props.theme.secFontColor};
  }

  h1 {
    font-size: 5rem;
    -webkit-text-stroke: 2px;
    -webkit-text-strpke-color: #fff;
    -webkit-text-fill-color: transparent;
    color: #fff;
    mix-blend-mode: difference;
  }

  img {
    // position: absolute;
    margin-left: -40px;
    opacity: ${(props) => props.theme.tagOpacity};
  }

  #tagtop {
    object-fit: contain;
    width: 70px;
    margin-bottom: 1rem;
  }

  #tagbottom {
    object-fit: contain;
    width: 50px;
    margin-top: 3rem;
  }

  @media only screen and (max-width: 800px){
    #tagbottom {
      margin-top: 2rem;
    }
  }
  @media only screen and (max-width: 700px){
    #tagbottom {
      margin-top: 1.5rem;
    }
  }
`;

export const LandingText = () => {
  const descriptionRef = useRef(null);
  useEffect(() => {
    var tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.to(".intro_cover", { scaleY: 0, duration: 1 }).from(
      descriptionRef.current,
      {
        x: "-400",
        opacity: 0,
        duration: 1,
        ease: "elastic",
      },
      "+=3"
    );
  }, []);
  return (
    <StyledLandingText className="landingText">
      <img src="images/tagtop.png" alt="" id="tagtop" />
      <p className="landingText__intro">
        <div className="intro_cover"></div> My name is Faruq, I’m a
      </p>
      {/* <h1>FRONTEND DEVELOPER</h1> */}
      <AnimatedTitle />
      <div ref={descriptionRef}>
        <p className="landingText__description">
          from Lagos, Nigeria. I love designing and building websites and
          applications and I’m a React.js and css nerd. When I’m not outdoor,
          running or watching movies I like to spend time learning more
          especially about Programming & Software Development, Fitness, Design
          and Fashion. I have been working on a lot of projects and I’m ready
          and currently looking Frontend Development oppurtunities.
        </p>
        <HomeSocials />
      </div>
      <img src="images/tagbottom.png" alt="" id="tagbottom" />
    </StyledLandingText>
  );
};
