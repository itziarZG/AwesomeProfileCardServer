import React from "react";

class Palette extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.props.handlePalette(event.target.value);
  }

  render() {
    const theChecked = this.props.i === 0 ? "checked" : "";
    const palette = ["green", "red", "random"];
    const paletteId = palette[this.props.i];

    return (
      <div className="design__palette-color">
        <input
          id={paletteId}
          className="palettes js-palette"
          type="radio"
          name="palette"
          value={`${this.props.i}`}
          onClick={this.handleClick}
          defaultChecked={theChecked}
        />

        <span className={`box-color ${paletteId}__1`}></span>
        <span className={`box-color ${paletteId}__2`}></span>
        <span className={`box-color ${paletteId}__3`}></span>
      </div>
    );
  }
}
export default Palette;
