import { forwardRef } from "react";
import { Link } from "react-scroll";
import styled, { keyframes } from "styled-components";

const circleAnim = keyframes`
from {
  transform: translateY(0px);
  z-index: 5;
}
to {
  transform: translateY(22px);
}
`;

const StyledScrollIcon = styled.div.attrs({ "data-id": "scroll" })`
  object-fit: contain;
  cursor: pointer;
  z-index: 4;

  & svg {
    cursor: pointer;
    fill: ${(props) => props.theme.fontColor};
  }

  & svg .innerRect {
    stroke: ${(props) => props.theme.fontColor};
  }

  & .circle {
    animation: ${circleAnim} 1s infinite alternate-reverse;
  }

  @media only screen and (max-width: 900px) {
    & svg {
      width: 15px;
    }
  }
`;
export const ScrollIcon = forwardRef((props, ref) => {
  return (
    <StyledScrollIcon ref={ref}>
      <Link to="projects" spy={true} smooth={true}>
        <svg width="20" viewBox="0 0 20 47" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="1.5"
            y="1.5"
            width="17"
            height="43.1538"
            rx="8.5"
            stroke-width="3"
            fill="none"
            className="innerRect"
          />
          <rect
            className="circle"
            x="5.38464"
            y="5.38461"
            width="9.23077"
            height="13.0769"
            rx="4.61538"
          />
        </svg>
      </Link>
    </StyledScrollIcon>
  );
});
