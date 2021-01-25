import "./style.scss";

export const HomeNav = () => {
  return (
    <ul className="homeNav">
      <li className="active">
        <a href="#">
          <p>Home</p>
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
    </ul>
  );
};
