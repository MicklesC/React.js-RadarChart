import React from "react";
import "../../css/textinput_style.css";

export class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue,
      label: this.props.label,
      optionItems: this.props.optionItems
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  // handleSubmit(e) {
  //   alert("The dropdown selected: " + this.state.value);
  // }

  render() {
    const optionsArray = this.state.optionItems;
    const optionsList = optionsArray.map((item, i) => (
      <option key={"option_" + i} value={item}>
        {item}
      </option>
    ));

    return (
      <label>
        {this.state.label}
        <select
          value={this.state.value}
          onChange={this.handleChange}
          className="formfield form_select"
        >
          {optionsList}
        </select>
      </label>
    );
  }
}
