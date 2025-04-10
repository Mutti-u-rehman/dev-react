import { useState } from "react";
import { LOGO_URL } from "../utiles/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utiles/hooks/useIsOnline";


const Header = () => {
  const [isLogin, SetIsLogin] = useState(true);
  const isUserOnline = useOnlineStatus();

  return (
    <div className="header-wrapper">
      <div className="logo">
        <img src={LOGO_URL} alt="logo of the website"></img>
      </div>
      <div className="menu-list">
        <ul>
          <li>Online status: { isUserOnline ? "Online" :  "Offline"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <button className="auth-btn" onClick={() => SetIsLogin(!isLogin)}>
            {isLogin ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
