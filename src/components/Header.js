import { useState } from "react";
import { LOGO_URL } from "../utiles/constant";

const Header = () => {
  const [isLogin, SetIsLogin] = useState(true);
  return (
    <div className="header-wrapper">
      <div className="logo">
        <img src={LOGO_URL} alt="logo of the website"></img>
      </div>
      <div className="menu-list">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
          <button className="auth-btn" onClick={() => SetIsLogin(!isLogin)}>
            {isLogin ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
