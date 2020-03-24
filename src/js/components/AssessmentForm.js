import React from "react";
import { Transition, TransitionGroup } from "react-transition-group";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import "../../css/form_style.css";

export class AssessmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxPullups: 0,
      maxPushups: 0,
      maxDips: 0,
      maxHang: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    alert("Input was " + this.state.value);
    escape.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <form>
          <label>
            <input
              className="formfield form_input"
              id={1}
              placeholder="Max Pullups"
              type="number"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              className="formfield form_input"
              id={2}
              placeholder="Max Pushups"
              type="number"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              className="formfield form_input"
              id={3}
              placeholder="Max Dips"
              type="number"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              className="formfield form_input"
              id={4}
              placeholder="Max Hangs"
              type="number"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <div>
          <button className="Submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </React.Fragment>
    );
  }
}

/*{ <Select
          defaultValue="Option 1"
          label="Select Label"
          optionItems={optionsArray}
        /> } */
