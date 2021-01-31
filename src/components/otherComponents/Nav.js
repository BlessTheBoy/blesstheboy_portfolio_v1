import React from "react";
import styled from "styled-components";

const StyledNav = styled.ul.attrs({ "data-id": "nav" })`
  width: 164px;
  & li {
    position: relative;
    height: 1rem;
    margin-top: 1.5rem;
    font-family: "Bebas Neue", cursive;
    font-weight: 700;
  }
  & li a {
    color: ${(props) => props.theme.fontColor};
    position: absolute;
    right: -110px;
    transition: all 0.5s ease-in-out;
  }
  & li a .nav_index {
    position: absolute;
    bottom: 0.5rem;
    left: 10px;
  }
  & li a .nav_title {
    position: absolute;
    left: 35%;
    bottom: 0.5rem;
  }
  & li a svg {
    fill: ${(props) => props.theme.fontColor};
    transition: all 0.5s ease-in-out;
  }
  & li a:hover {
    color: ${(props) => props.theme.accentColor};
    right: 0;
    svg {
      fill: ${(props) => props.theme.accentColor};
    }
  }
`;

export const Nav = () => {
  return (
    <StyledNav>
      <li>
        <a href="">
          <p className="nav_index">00</p>
          <p className="nav_title">HOME</p>
          <svg
            width="164"
            viewBox="0 0 164 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="4" rx="2" />
            <rect x="39" y="1.64709" width="175" height="0.941176" />
          </svg>
        </a>
      </li>
      <li>
        <a href="">
          <p className="nav_index">01</p>
          <p className="nav_title">PORTFOLIO</p>
          <svg
            width="164"
            viewBox="0 0 164 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="4" rx="2" />
            <rect x="39" y="1.64709" width="175" height="0.941176" />
          </svg>
        </a>
      </li>
      <li>
        <a href="">
          <p className="nav_index">02</p>
          <p className="nav_title">CONTACT</p>
          <svg
            width="164"
            viewBox="0 0 164 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="4" rx="2" />
            <rect x="39" y="1.64709" width="175" height="0.941176" />
          </svg>
        </a>
      </li>
    </StyledNav>
  );
};
