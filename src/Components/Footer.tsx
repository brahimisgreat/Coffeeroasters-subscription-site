import React from "react";
import "./Footer.css";
import logo from '../assets/shared/desktop/logo.svg'

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__logo">
          <img src={logo} alt="coffeeroasters logo" />
        </div>

        <div className="footer__menu">
          <ul>
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

        <div className="footer__social">
          <a href="#">
            <img src="/images/icon-facebook.svg" alt="facebook" />
          </a>
          <a href="#">
            <img src="/images/icon-twitter.svg" alt="twitter" />
          </a>
          <a href="#">
            <img src="/images/icon-pinterest.svg" alt="pinterest" />
          </a>
          <a href="#">
            <img src="/images/icon-instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};
