// import "./style.scss";
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
`;

export const HomeNav = () => {
  return (
    <StyledHomeNav className="homeNav">
      <li className="active">
        <a href="#">
          <p>&lt; Home /&gt;</p>
        </a>
      </li>
      <li>
        <a href="#">
          <p>Projects</p>
        </a>
      </li>
      <li>
        <a href="#">
          <p>Contact</p>
        </a>
      </li>
    </StyledHomeNav>
  );
};
