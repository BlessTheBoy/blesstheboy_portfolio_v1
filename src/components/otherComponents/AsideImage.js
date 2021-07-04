import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useStateValue } from "../StateProvider";
const imgwidth = "60";

const rotateAnim = (x, y, s) => keyframes`
0%  { -webkit-transform: rotate(0deg) translateX(${x}px) translateY(${y}px) rotate(0deg) scale(${s}); z-index: 5;}
25%  { -webkit-transform: rotate(90deg) translateX(${x}px) translateY(${y}px) rotate(-90deg) scale(${
  s * 0.75
}); z-index: 1; }
50%  { -webkit-transform: rotate(180deg) translateX(${x}px) translateY(${y}px) rotate(-180deg) scale(${
  s * 0.6
}); z-index: 1; }
75%  { -webkit-transform: rotate(270deg) translateX(${x}px) translateY(${y}px) rotate(-270deg) scale(${
  s * 0.75
}); z-index: 1;}
100%  { -webkit-transform: rotate(360deg) translateX(${x}px) translateY(${y}px) rotate(-360deg) scale(${s}); z-index: 5;}
`;
const rotateRevrAnim = (x, y, s) => keyframes`
0%  { -webkit-transform: rotate(0deg) translateX(${x}px) translateY(${y}px) rotate(0deg) scale(${s}); z-index: 5;}
25%  { -webkit-transform: rotate(-90deg) translateX(${x}px) translateY(${y}px) rotate(90deg) scale(${
  s * 0.75
}); z-index: 1; }
50%  { -webkit-transform: rotate(-180deg) translateX(${x}px) translateY(${y}px) rotate(180deg) scale(${
  s * 0.6
}); z-index: 1; }
75%  { -webkit-transform: rotate(-270deg) translateX(${x}px) translateY(${y}px) rotate(270deg) scale(${
  s * 0.75
}); z-index: 1;}
100%  { -webkit-transform: rotate(-360deg) translateX(${x}px) translateY(${y}px) rotate(360deg) scale(${s}); z-index: 5;}
`;

const rotate360Anim = keyframes`
100% {  
  transform: rotate(-360deg);
}
`;

const StyledAsideImage = styled.div.attrs({ "data-id": "asideImage" })`
  position: relative;
  z-index: 20;

  & #sun-wrap {
    position: relative;
    object-fit: contain;
    width: 100%;
    z-index: 3;
  }
  & #sun-wrap svg {
    object-fit: contain;
    width: 100%;
    position: relative;
    z-index: 3;
  }

  & .imgwrap{    
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 40px;
    height: 40px;
    z-index: 1;
  }

  & img {
    object-fit: contain;
    width: ${imgwidth}px;
    z-index: 1;
  }

  & #javascriptlogo {
    animation: ${rotateAnim(130, 130, 1)} 5s infinite linear;
  }
  & #javascriptlogo img {    
    width: ${0.9 * imgwidth}px;
    animation: ${rotate360Anim} 40s infinite linear;
  }

  & #htmllogo img {
    width: ${0.9 * imgwidth}px;
    animation: ${rotate360Anim} 40s infinite linear;
  }
  & #htmllogo {
    animation: ${rotateRevrAnim(100, 120, 1)} 6s infinite linear;
  }

  & #csslogo img {
    width: ${0.9 * imgwidth}px;
    animation: ${rotate360Anim} 40s infinite linear; 
  }
  & #csslogo {
    animation: ${rotateAnim(100, 120, 1)} 6s infinite linear 3s; 
  }

  & #reactlogo img {
    width: ${imgwidth}px;
    animation: ${rotate360Anim} 40s infinite linear;
  }
  & #reactlogo {
    animation: ${rotateAnim(90, 120, 1)} 7s infinite linear;
  }

  & #githublogo img {
    width: ${0.8 * imgwidth}px;
    animation: ${rotate360Anim} 40s infinite linear;
  }
  & #githublogo {
    animation: ${rotateRevrAnim(90, 120, 1)} 7s infinite linear 3.5s;
  }

  & #sasslogo img {
    width: ${0.6 * imgwidth}px;
    animation: ${rotate360Anim} 40s infinite linear;
  }
  & #sasslogo {
    animation: ${rotateAnim(80, 100, 1)} 8s infinite linear;
  }

  & #vscodelogo img {
    width: ${0.6 * imgwidth}px;
    animation: ${rotate360Anim} 40s infinite linear;
  }
  & #vscodelogo {
    width: ${0.6 * imgwidth}px;
    animation: ${rotateRevrAnim(80, 60, 1)} 8s infinite linear 4s;
  }

  & #figmalogo img {
    width: ${0.3 * imgwidth}px;
    animation: ${rotate360Anim} 40s infinite linear;
  }
  & #figmalogo {
    animation: ${rotateAnim(80, 100, 1)} 9s infinite linear;
  }

  & #xdlogo img {
    width: ${0.35 * imgwidth}px;
    animation: ${rotate360Anim} 40s infinite linear;
  }
  & #xdlogo {
    animation: ${rotateRevrAnim(80, 60, 1)} 9s infinite linear 4.5s;
  }
`;

export const AsideImage = () => {
  const [{ theme }, dispatch] = useStateValue();
  const sun = useRef(null);
  const containerRef = useRef(null);
  const time = 40;

  useEffect(() => {
    gsap.to(containerRef.current, {
      rotation: 360,
      duration: time,
      repeat: -1,
      ease: "none",
      transformOrigin: "center",
    });
  }, []);
  return (
    <StyledAsideImage ref={containerRef} className="desktop">
      <div id="sun-wrap">
        <svg
          ref={sun}
          width="864"
          viewBox="0 0 864 872"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="432.5" cy="422.5" r="303.5" fill="url(#paint0_radial)" />
          <path
            d="M135.5 378.718C52.6528 393.112 0.999969 413.453 0.999969 436C0.999969 479.63 194.413 515 433 515C671.587 515 865 479.63 865 436C865 413.453 813.347 393.112 730.5 378.718"
            stroke={theme === "dark" ? "#ffffff" : "#000000"}
          />
          <path
            d="M236.5 651.969C155.513 692.918 97.365 709 83.5047 689.923C57.8593 654.625 193.544 512.325 386.565 372.088C579.586 231.85 756.85 146.779 782.495 182.077C795.382 199.813 767.534 244.567 712.146 302.5"
            stroke={theme === "dark" ? "#ffffff" : "#000000"}
          />
          <path
            d="M403.736 723.5C361.731 805.905 323.544 854.248 300.864 846.879C259.369 833.396 285.499 638.52 359.226 411.61C432.954 184.7 526.36 11.6833 567.855 25.1659C588.226 31.7847 592.299 82.1199 582.444 158.5"
            stroke={theme === "dark" ? "#ffffff" : "#000000"}
          />
          <path
            d="M389.713 124.5C352.777 56.876 319.882 18.5227 299.505 25.1435C258.01 38.6261 284.139 233.503 357.867 460.412C431.594 687.322 525 860.339 566.495 846.856C589.098 839.512 591.636 778.347 577.346 687.5"
            stroke={theme === "dark" ? "#ffffff" : "#000000"}
          />
          <path
            d="M220 211.88C147.667 177.022 96.4045 164.322 83.5046 182.077C57.8592 217.374 193.544 359.674 386.565 499.912C579.586 640.15 756.85 725.221 782.495 689.923C796.078 671.229 764.407 622.52 702.933 560"
            stroke={theme === "dark" ? "#ffffff" : "#000000"}
          />
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(601.5 741.5) rotate(-112.994) scale(700.13)">
              <stop stopColor={theme === "dark" ? "#888888" : "#AEAEAE"} />
              <stop
                offset="1"
                stopColor={theme === "dark" ? "#333333" : "#EEEEEE"}
              />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="imgwrap" id="htmllogo">
        <img src="images/htmllogo.png" alt="htmllogo" />
      </div>
      <div id="csslogo" className="imgwrap">
        <img src="images/csslogo.png" alt="csslogo" />
      </div>
      <div id="javascriptlogo" className="imgwrap">
        <img src="images/javascriptlogo.png" alt="javascriptlogo" />
      </div>
      <div className="imgwrap" id="reactlogo">
        <img src="images/reactlogo.png" alt="reactlogo" />
      </div>
      <div className="imgwrap" id="githublogo">
        <img src="images/githublogo.png" alt="githublogo" />
      </div>
      <div className="imgwrap" id="sasslogo">
        <img src="images/sasslogo.png" alt="sasslogo" />
      </div>
      <div className="imgwrap" id="vscodelogo">
        <img src="images/vscodelogo.png" alt="vscodelogo" />
      </div>
      <div className="imgwrap" id="figmalogo">
        <img src="images/figmalogo.png" id="figmalogo" alt="figmalogo" />
      </div>
      <div className="imgwrap" id="xdlogo">
        <img src="images/xdlogo.png" alt="xdlogo" />
      </div>
    </StyledAsideImage>
  );
};
