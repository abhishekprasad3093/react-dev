import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="app-title">SwiGato</div>
      <div className="nav-items">
        <ul>
          <li>
            <button className="button-63">Home</button>
          </li>
          <li>
            <button className="button-63">About Us</button>
          </li>
          <li>
            <button className="button-63">Contact Us</button>
          </li>
          <li>
            <button className="button-63">Cart</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
