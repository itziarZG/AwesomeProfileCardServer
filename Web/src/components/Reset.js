import React from 'react';

class Reset extends React.Component {
  render() {
    return (
      <button className="main__reset js-reset" onClick={this.props.handleReset}>
        <i className="far fa-trash-alt main__reset--trash"></i>
        Reset
      </button>
    );
  }
}
export default Reset;
