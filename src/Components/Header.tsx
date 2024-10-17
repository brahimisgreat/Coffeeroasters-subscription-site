import logo from "../assets/shared/desktop/logo.svg";
import hamburger from "../assets/shared/mobile/icon-hamburger.svg";
import "../Components/Header.css";
import close from "../assets/shared/mobile/icon-close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <nav className="header flex 
     w-full justify-between">
      <div className="logo">
        <img className="header-logo relative z-10 md:h-6 md:w-60" src={logo} alt="logo" />
      </div>

      <img
        src={isOpen ? close : hamburger}
        id="ham"
        className={isOpen ? "open relative z-10" : "menu  relative z-10 "}
        alt="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      />

      <ul className={isOpen ? "nav-links md:h-6  " : "hidden"}>
        <div className="flex flex-col gap-4 mb-96 items-center  md:flex-row md:mb-0 md:text-gray-600  ">
        <Link to='/'> <li className="text-2xl md:text-xs">Home</li></Link> 
        <Link to='/about' ><li className="text-2xl md:text-xs">About Us</li></Link> 
        <Link to='/'> <li className="text-2xl md:text-xs ">Create Your Plan</li></Link> 
        </div>
      </ul>
    </nav>
  );
};
