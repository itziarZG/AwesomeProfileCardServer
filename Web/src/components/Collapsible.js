import React from "react";

class Collapsible extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(ev) {
    this.props.handleClick(ev.target.id);
  }

  render() {
    const hiddenClass = this.props.toClose ? "hidden" : "";
    const rotateClass = this.props.toClose ? "" : "icon-up-move";
    const borderClass = this.props.id === "1" ? "border-title" : "";

    return (
      <section className={this.props.sectionClass} key={this.props.id}>
        <div
          className={`design__title js-form-title1 ${borderClass}`}
          id={this.props.id}
          onClick={this.handleClick}
        >
          <div className="design__title-container" id={this.props.id}>
            <i
              className={`${this.props.icon} icon-design`}
              id={this.props.id}
            ></i>
            <h2 className="design__main-title" id={this.props.id}>
              {this.props.title}
            </h2>
          </div>
          <div className="design__down-up" id={this.props.id}>
            <i
              className={`far fa-gem icon-up js-arrow-up ${rotateClass}`}
              id={this.props.id}
            ></i>
          </div>
        </div>
        <div className={hiddenClass}>{this.props.children}</div>
      </section>
    );
  }
}
export default Collapsible;
