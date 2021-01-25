import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../images/divas-cards.png";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="header">
            <img className="header__photo" src={logo} alt="Logo-tarjetas" />
          </div>
        </Link>
      </header>
    );
  }
}

export default Header;
