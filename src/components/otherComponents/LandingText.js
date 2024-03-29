import styled from "styled-components";
import { gsap } from "gsap";
import { AnimatedTitle } from "./AnimatedTitle";
import { HomeSocials } from "./HomeSocials";
import { useEffect, useRef } from "react";
import { AnimatedMobileTitle } from "./AnimatedMobileTitle";
import { Link } from "react-scroll";

const StyledLandingText = styled.div`
  padding: 0.5rem 1rem 2rem;
  // padding-top: 0.5rem;
  width: fit-content;
  position: relative;
  z-index: 30;

  p.landingText__intro {
    width: fit-content;
    font-size: 1.2rem;
    position: relative;
    z-index: 0;
  }
  p.landingText__intro span {
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

  #newsletter {
    padding: 0.4em 1.7em;
    border-radius: 0.8em;
    background-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.body};
    font-weight: 600;
    transition: all ease-in-out 200ms;
    width: fit-content;
    cursor: pointer;

    &:hover {
      filter: brightness(85%);
    }
  }

  h1 {
    font-size: 5rem;
    -webkit-text-stroke: 2px;
    -webkit-text-strpke-color: #fff;
    -webkit-text-fill-color: transparent;
    color: #fff;
    mix-blend-mode: difference;
  }

  & > img {
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
    margin-top: 2rem;
  }

  @media only screen and (max-width: 800px) {
    #tagbottom {
      margin-top: 1.5rem;
    }
  }
  @media only screen and (max-width: 700px) {
    #tagbottom {
      margin-top: 1rem;
    }
  }
  @media only screen and (max-width: 750px) {
    p.landingText__intro span {
      background-color: ${(props) => props.theme.bodyMobile};
    }
    width: 100%;
    p.landingText__intro {
      font-size: 1rem;
    }
    p.landingText__description {
      width: 100%;
      font-size: 0.75rem;
      text-align: justify;
      padding: 0;
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
      <img src="images/tagtop.png" alt="" id="tagtop" className="desktop" />
      <p className="landingText__intro">
        <span className="intro_cover"></span> My name is Faruq, I’m a
      </p>
      {/* <h1>FRONTEND DEVELOPER</h1> */}
      <AnimatedTitle />
      <AnimatedMobileTitle />
      <div ref={descriptionRef}>
        <p className="landingText__description">
          from Lagos, Nigeria. I love designing and building websites and
          applications and I’m a React.js and css nerd. When I’m not outdoor,
          running or watching movies I like to spend time learning more
          especially about Programming & Software Development, Fitness, Design
          and Fashion. I have been working on a lot of projects and I’m ready
          and currently looking for Frontend Development oppurtunities.
        </p>
        <HomeSocials />
        <Link to="contacts" spy={true} smooth={true}>
          <p id="newsletter">Subscribe to my newsletter</p>
        </Link>
      </div>
      <img
        src="images/tagbottom.png"
        alt=""
        id="tagbottom"
        className="desktop"
      />
    </StyledLandingText>
  );
};
