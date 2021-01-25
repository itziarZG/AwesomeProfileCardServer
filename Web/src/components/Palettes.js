import React from "react";
import Palette from "./Palette";

class Palettes extends React.Component {
  render() {
    return (
      <>
        <Palette i={0} handlePalette={this.props.handlePalette} />
        <Palette i={1} handlePalette={this.props.handlePalette} />
        <Palette i={2} handlePalette={this.props.handlePalette} />
      </>
    );
  }
}
export default Palettes;
