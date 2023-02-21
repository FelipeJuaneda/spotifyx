import { useState } from "react";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineLogout,
} from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import logo from "../../assets/logoSpotifyx.png";
import "./SideBar.css";

const Sidebar = ({ children }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <main id="sideBarCont" className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" onClick={handleToggle}>
          {show ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </header>

      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <a to="/" className="nav-logo">
              <img className="logo" src={logo} alt="logo de spotifyx" />
            </a>

            <div className="nav-list">
              <a to="/dashboard" className="nav-link active">
                <AiFillHome className="nav-logo-icon" />
                <span className="nav-link-name">Inicio</span>
              </a>
              <a to="/hotel" className="nav-link">
                <AiOutlineSearch className="nav-logo-icon" />
                <span className="nav-link-name">Buscar</span>
              </a>
              <a to="/gallery" className="nav-link">
                <BiLibrary className="nav-logo-icon" />
                <span className="nav-link-name">Tu biblioteca</span>
              </a>
              <a to="/gallery" className="nav-link">
                <AiOutlineHeart className="nav-logo-icon" />
                <span className="nav-link-name">Favoritos</span>
              </a>
            </div>
          </div>

          <a to="/logout" className="nav-link">
            <AiOutlineLogout className="nav-logo-icon" />
            <span className="nav-link-name">Cerrar sesión </span>
          </a>
        </nav>
      </aside>

      {children}
    </main>
  );
};

export default Sidebar;
