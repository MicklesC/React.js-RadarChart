import React from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>555-555-5555</p>
      <Link to="/">Home</Link>
    </div>
  );
}

// export default class Contact extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>Contact Page</h2>
//         <p>555-555-5555</p>
//       </div>
//     );
//   }
// }
