import React from "react";

class Input extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  render() {
    return (
      <>
        <label
          htmlFor={this.props.for_id_name}
          className={`label ${this.props.classLabel}`}
        >
          {this.props.labelTitle}
        </label>
        <input
          id={this.props.for_id_name}
          className="fill__input js-fill"
          type={this.props.type}
          name={this.props.for_id_name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.handleChange}
        />
      </>
    );
  }
}
export default Input;
