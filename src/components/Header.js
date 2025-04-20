import { useState } from "react";
import { LOGO_URL } from "../utiles/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utiles/hooks/useIsOnline";

const Header = () => {
  const [isLogin, SetIsLogin] = useState(true);
  const isUserOnline = useOnlineStatus();

  return (
    <div className="flex justify-between items-center">
      <div className="w-20">
        <img src={LOGO_URL} alt="logo of the website"></img>
      </div>
      <div>
        <ul className="flex flex-wrap gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button className="auth-btn" onClick={() => SetIsLogin(!isLogin)}>
            {isLogin ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
