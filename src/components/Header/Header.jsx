import React from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSmile } from "react-icons/ai";

const Header = ({ show, handleToggle }) => {
  return (
    <header className={`header ${show ? "space-toggle" : null}`}>
      <div className="header-toggle" onClick={handleToggle}>
        {show ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <div className="flex items-center gap-3 text-2xl md:text-2xl font-medium">
        <AiOutlineSmile className="text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
        <div>
          Bienvenido,{" "}
          <span className="text-white-color underline decoration-indigo-500">Jorge</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
