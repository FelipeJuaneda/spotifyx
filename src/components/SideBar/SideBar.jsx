import { useState } from "react";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineLogout,
} from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logoSpotifyx.png";
import Header from "../Header/Header";
import "./SideBar.css";

const Sidebar = ({ children }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <main id="sideBarCont" className={show ? "space-toggle" : null}>
      <Header handleToggle={handleToggle} show={show} />

      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <Link to="/" className="nav-logo">
              <img className="logo hover:rotate-45 transition-all duration-200" src={logo} alt="logo de spotifyx" />
            </Link>

            <div className="nav-list">
              <NavLink to="/" activeclassname="active" className="nav-link ">
                <AiFillHome className="nav-logo-icon" />
                <span className="nav-link-name">Inicio</span>
              </NavLink>
              <NavLink
                to="/search"
                activeclassname="active"
                className="nav-link"
              >
                <AiOutlineSearch className="nav-logo-icon" />
                <span className="nav-link-name">Buscar</span>
              </NavLink>
              <NavLink
                to="/playlist"
                activeclassname="active"
                className="nav-link"
              >
                <BiLibrary className="nav-logo-icon" />
                <span className="nav-link-name">Tu biblioteca</span>
              </NavLink>
              <NavLink
                to="/favorites"
                activeclassname="active"
                className="nav-link"
              >
                <AiOutlineHeart className="nav-logo-icon" />
                <span className="nav-link-name">Favoritos</span>
              </NavLink>
            </div>
          </div>

          <Link to="/logout" className="nav-link">
            <AiOutlineLogout className="nav-logo-icon" />
            <span className="nav-link-name">Cerrar sesión </span>
          </Link>
        </nav>
      </aside>

      {children}
    </main>
  );
};

export default Sidebar;
