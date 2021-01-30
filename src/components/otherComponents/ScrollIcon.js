import { forwardRef } from "react";
import styled from "styled-components";

const StyledScrollIcon = styled.div.attrs({ "data-id": "scroll" })`
  object-fit: contain;

  & svg {
    fill: ${(props) => props.theme.fontColor};
  }

  & svg .innerRect {
    stroke: ${(props) => props.theme.fontColor};
  }
`;
export const ScrollIcon = forwardRef((props, ref) => {
  return (
    <StyledScrollIcon ref={ref}>
      <svg
        width="20"
        height="47"
        viewBox="0 0 20 47"
        xmlns="http://www.w3.org/2000/svg">
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
          x="5.38464"
          y="5.38461"
          width="9.23077"
          height="13.0769"
          rx="4.61538"
        />
      </svg>
    </StyledScrollIcon>
  );
});
