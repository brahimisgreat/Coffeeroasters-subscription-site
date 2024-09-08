import logo from "../assets/shared/desktop/logo.svg";
import hamburger from "../assets/shared/mobile/icon-hamburger.svg";
import "../Components/Header.css";
import close from "../assets/shared/mobile/icon-close.svg";
import { useState } from "react";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="header">
      <div className="logo">
        <img className="header-logo relative z-10" src={logo} alt="logo" />
      </div>

      <img
        src={isOpen ? close : hamburger}
        className={isOpen ? "open relative z-10" : "menu  relative z-10 "}
        alt="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      />

      <ul className={isOpen ? "nav-links " : "hidden"}>
        <div className="flex flex-col gap-4 mb-96 items-center">
          <li className="text-2xl">Home</li>
          <li className="text-2xl">About Us</li>
          <li className="text-2xl">Create Your Plan</li>
        </div>
      </ul>
    </nav>
  );
};
