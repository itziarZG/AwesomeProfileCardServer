import React from "react";
import logo2 from "../images/logo.png";
import logo3 from "../images/logo-adalab.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <small className="footer__copy">
          {"<Div_as>"} profile-cards &copy; 2020
        </small>
        <img
          className="footer__logo"
          src={logo2}
          alt="Logo del equipo"
          title="Logo del equipo"
        />
        <img
          className="footer__image"
          src={logo3}
          alt="Logo Adalab"
          title="Logo Adalab"
        />
      </footer>
    );
  }
}

export default Footer;
