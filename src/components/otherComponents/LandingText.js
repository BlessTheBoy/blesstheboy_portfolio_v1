import styled from "styled-components";
import { AnimatedTitle } from "./AnimatedTitle";
import { HomeSocials } from "./HomeSocials";

const StyledLandingText = styled.div`
  padding: 1rem;
  padding-top: .5rem
  width: fit-content;
  position: relative;

  p.landingText__intro {
    font-size: 1.2rem;
  }

  p.landingText__description {
    font-size: 0.9rem;
    width: 60%;
    padding-left: 5px;
    color: #5b5a5c;
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
    margin-top: 3.5rem;
  }
`;

export const LandingText = () => {
  return (
    <StyledLandingText className="landingText">
      <img src="images/tagtop.png" alt="" id="tagtop" />
      <p className="landingText__intro">My name is Faruq, I’m a</p>
      {/* <h1>FRONTEND DEVELOPER</h1> */}
      <AnimatedTitle />
      <p className="landingText__description">
        from Lagos, Nigeria. I love designing and building websites and
        applications and I’m a React.js and css nerd. When I’m not outdoor,
        running or watching movies I like to spend time learning more especially
        about Programming & Software Development, Fitness, Design and Fashion. I
        have been working on a lot of projects and I’m ready and currently
        looking Frontend Development oppurtunities.
      </p>
      <HomeSocials />
      <img src="images/tagbottom.png" alt="" id="tagbottom" />
    </StyledLandingText>
  );
};
