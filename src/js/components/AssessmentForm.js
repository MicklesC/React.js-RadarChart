import React from "react";
import { Input } from "./Input";
import { Select } from "./Select";

export class AssessmentForm extends React.Component {
  render() {
    const optionsArray = [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4",
      "Option 5"
    ];
    return (
      <form>
        <Input
          id="1"
          label="Criteria 1"
          placeholder="criteria one"
          type="number"
        />
        <Input
          id="2"
          label="Criteria 2"
          placeholder="Criteria Two"
          type="text"
        />
        <Select
          defaultValue="Option 1"
          label="Select Label"
          optionItems={optionsArray}
        />
      </form>
    );
  }
}

// export const AssessmentForm = props => {
//   render () {
//   return (
//     <Input
//       id="1"
//       active={true}
//       label="Criteria One"
//       placeholder="Criteria 1"
//       type="number"
//     />
//   );
// }
// };

// active: props.active || false,
// value: props.value || "",
// label: props.label || "",
// pleaceholder: props.placeholder || "",
// type: props.type || "",
// id: props.id || ""
