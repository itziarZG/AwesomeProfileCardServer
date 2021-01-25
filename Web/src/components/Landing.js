import React from "react";
import divasCards from "../images/divas-cards.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <main className="main-index">
          <img
            className="main-index__image"
            src={divasCards}
            alt="Logo Awesome Cards"
            title="Logo Awesome Cards"
          />

          <h1 className="main-index__title">Crea tu tarjeta de visita</h1>
          <p className="main-index__paragraph">
            Crea mejores contactos profesionales de forma fácil y cómoda.
          </p>
          <div className="main-index__icons">
            <div className="main-index__icons-container">
              <i className="far fa-object-ungroup"></i>
              <p className="main-index__icons-paragraph">Diseña</p>
            </div>
            <div className="main-index__icons-container">
              <i className="far fa-keyboard"></i>
              <p className="main-index__icons-paragraph">Rellena</p>
            </div>
            <div className="main-index__icons-container">
              <i className="fas fa-share-alt"></i>
              <p className="main-index__icons-paragraph">Comparte</p>
            </div>
          </div>
          <Link to="/cardGenerator" style={{ textDecoration: "none" }}>
            <div className="main-index__button-container">
              <a
                href="./design.html"
                className="main-index__button"
                title="Aquí para comenzar"
              >
                Comenzar
              </a>
            </div>
          </Link>
        </main>
        <Footer></Footer>
      </>
    );
  }
}
export default Landing;
