import React from "react";
import "./Footer.css";
import logo from "../assets/shared/desktop/logo.svg";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";

export const Footer = () => {

  
  return (
    <footer className="footer flex justify-center">
      <div className="footerBaby flex flex-col items-center justify-center gap-10">
        <div className="footer__logo">
          <img src={logo} className="bg-white w-52 h-6" alt="coffeeroasters logo" />
        </div>

        <div className="footer__menu">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Create your plan</a>
            </li>
          </ul>
        </div>

        <div className="footer__social flex gap w-36  justify-between items-center">
          <a href="#">
            <img src={facebook} alt="twitter" />
          </a>
          <a href="#">
            <img src={twitter} alt="pinterest" />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};
