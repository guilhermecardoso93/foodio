import { useState } from "react";
import "./styles.css";

export function Menu() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`navbar ${isActive ? "active" : ""}`}>
      <div className="navbar-logo">
        <h1>
          Food<b>io</b>
        </h1>
      </div>
      <div className="hamburguer" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-link ${isActive ? "show" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Service</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Gallery</a>
        </li>
      </ul>
      <div className="auth-buttons">
        <input type="submit" className="sign" value="Sign in" name="signin" />
        <input type="submit" className="sign" value="Sign Out" name="signout" />
      </div>
    </div>
  );
}
