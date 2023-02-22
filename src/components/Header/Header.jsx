import React from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSmile } from "react-icons/ai";

const Header = ({ show, handleToggle }) => {
  return (
    <header className={`header ${show ? "space-toggle" : null}`}>
      <div className="header-toggle" onClick={handleToggle}>
        {show ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <div className="flex items-center gap-3 text-2xl md:text-2xl font-medium">
        <AiOutlineSmile className="text-white-color" />
        <div>
          Bienvenido,{" "}
          <span className="text-white-color hover:text-gray-200 underline decoration-indigo-500 cursor-pointer">
            Jorge
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
