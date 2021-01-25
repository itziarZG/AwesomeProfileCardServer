import React from "react";
import PropTypes from "prop-types";
import background1 from "../images/Fondo.jpg";
import background2 from "../images/MM.jpg";
import Reset from "./Reset";

class PreviewCard extends React.Component {
  render() {
    let color = "";
    if (this.props.palette === "0") color = "green";
    if (this.props.palette === "1") color = "red";
    if (this.props.palette === "2") color = "random";
    return (
      <section
        className="main"
        style={{ backgroundImage: `url(${background1})` }}
      >
        <Reset handleReset={this.props.handleReset} />
        {/* <div className="main__reset js-reset">
          <i className="far fa-trash-alt main__reset--trash"></i>
          <a className="main__reset--button" href="./">
            Reset
          </a>
        </div> */}

        <section className={`main__photo js-card-container js-${color}`}>
          <div className="main__photo--title js-title">
            <h4 className="name js-name">
              {this.props.name || "Marilyn Monroe"}
            </h4>
            <p className="description js-description js-job">
              {this.props.job || "Actress"}
            </p>
          </div>
          <div className="main__photo--photo">
            <div
              className="profile__image js__profile-image"
              style={{
                backgroundImage: `url(${this.props.photo || background2})`,
              }}
            ></div>
          </div>
          <div className="main__photo--social">
            <a
              href={this.props.phone}
              className="js-icon-phone js-telephone"
              target="_blank"
              rel="noreferrer"
              title="Teléfono"
            >
              <i className="icons js-icons fas fa-mobile-alt"></i>
            </a>
            <a
              href={this.props.email}
              className="js-icon-mail js-email"
              target="_blank"
              rel="noreferrer"
              title="Email"
            >
              <i className="icons js-icons far fa-envelope"></i>
            </a>
            <a
              href={this.props.linkedin}
              className="js-icon-linkedin js-linkedin"
              target="_blank"
              rel="noreferrer"
              title="Linkedin"
            >
              <i className="icons js-icons fab fa-linkedin-in"></i>
            </a>
            <a
              href={this.props.github}
              className="js-icon-github js-github"
              target="_blank"
              rel="noreferrer"
              title="Github"
            >
              <i className="icons js-icons fab fa-github-alt"></i>
            </a>
          </div>
        </section>
      </section>
    );
  }
}

PreviewCard.defaultProps = {
  name: "Marilyn Monroe",
  job: "Actress",
  photo: background2,
};

PreviewCard.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  photo: PropTypes.string,
  palette: PropTypes.number,
};

export default PreviewCard;
