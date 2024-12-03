import { LOGO_URL } from "../utiles/constant";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
