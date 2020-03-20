import React from "react";
import "../../css/form_style_input.css";

export class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      label: this.props.label || "",
      pleaceholder: this.props.placeholder || "",
      type: this.props.type || "",
      id: this.props.id || "",
      value: this.props.value || ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  // Not sure if I need this
  // handleSubmit(e) {
  //   alert("This info was submitted: " + this.state.value);
  //   e.preventDefault();
  // }
  render() {
    return (
      <label>
        {this.state.label}
        <input
          className="formfield form_input"
          id={this.state.id}
          placeholder={this.state.placeholder}
          type={this.state.type}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <h1>{this.state.value}</h1>
      </label>
    );
  }
}
