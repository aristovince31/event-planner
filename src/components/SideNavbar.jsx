import {
  BsChevronDoubleRight,
  BsDoorClosed,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./SideNavbar.css";

const SideNavbar = ({ Navigation }) => {
  const Navigate = useNavigate();
  const redirect = (path) => {
    Navigate(path);
  };
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <a className="nav-link">
            <span className="link-text" id="welcomeUser">
              Hello, Dev
            </span>
            <BsChevronDoubleRight />
          </a>
        </li>
        {Navigation.map((item, index) => {
          return (
            <li key={index} className="nav-item">
              <a
                title={item.title}
                className="nav-link"
                onClick={() => redirect(item.path)}
              >
                {item.icon}
                <span className="link-text">{item.title}</span>
              </a>
            </li>
          );
        })}
        <li className="nav-item">
          <a
            title="Log Out"
            className="nav-link"
            onClick={() => {
              redirect("/login");
              localStorage.removeItem("user");
            }}
          >
            <BsDoorClosed />
            <span className="link-text">Log Out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavbar;
