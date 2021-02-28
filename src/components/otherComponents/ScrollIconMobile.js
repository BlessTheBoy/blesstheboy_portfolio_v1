import { forwardRef } from "react";
import { Link } from "react-scroll";
import styled, { keyframes } from "styled-components";

const circleAnim = keyframes`
    10.05% {
        -webkit-transform: translateY(5px);
        transform: translateY(5px);
    }
    20.1% {
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
    }
    33.5% {
        -webkit-transform: translateY(3px);
        transform: translateY(3px);
    }
    43.55% {
        -webkit-transform: translateY(-3px);
        transform: translateY(-3px);
    }
    53.6% {
        -webkit-transform: translateY(2px);
        transform: translateY(2px);
    }
    67% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
`;

const StyledScrollIconMobile = styled.div.attrs({ "data-id": "scrollmobile" })`
  object-fit: contain;
  cursor: pointer;
  z-index: 4;
  animation: ${circleAnim} 1.5s ease infinite;

  & svg {
    cursor: pointer;
    margin: 0 auto;
    fill: ${(props) => props.theme.fontColor};
    stroke: ${(props) => props.theme.fontColor};
  }

  @media only screen and (max-width: 900px) {
    & svg {
      width: 25px;
    }
  }
`;
export const ScrollIconMobile = forwardRef((props, ref) => {
  return (
    <StyledScrollIconMobile ref={ref} className="mobile">
      <Link to="projects" spy={true} smooth={true}>
        <svg
          width="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.6 8.59998L12 13.2L7.4 8.59998L6 9.99998L12 16L18 9.99998L16.6 8.59998Z"
          />
        </svg>
      </Link>
    </StyledScrollIconMobile>
  );
});
