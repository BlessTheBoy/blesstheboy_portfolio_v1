// import "./style.scss";
import { Link } from "react-scroll";
import styled from "styled-components";

const StyledHomeNav = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin-left: 2rem;
  }

  li a {
    text-decoration: none;
    color: inherit;
    font-size: 0.8rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
  }

  li a:hover {
    color: ${(props) => props.theme.accentColor};
  }

  li.active a {
    color: ${(props) => props.theme.accentColor};
    font-weight: 700;
  }

  @media only screen and (max-width: 840px) {
    li a {
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const HomeNav = () => {
  return (
    <StyledHomeNav className="homeNav desktop">
      <li className="active">
        <a href="#">
          <p>&lt; Home /&gt;</p>
        </a>
      </li>
      <li>
        <Link to="projects" spy={true} smooth={true}>
          <p>Projects</p>
        </Link>
      </li>
      <li>
        <Link to="contacts" spy={true} smooth={true}>
          <p>Contact</p>
        </Link>
      </li>
    </StyledHomeNav>
  );
};
