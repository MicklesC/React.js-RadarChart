import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/Contact">Contact</Link>
      <p>
        Cras facilisis urna ornare ex volutpat, et convallis erat elementum. Ut
        aliquam, ipsum vitae gravida suscipit, metus dui bibendum est,
        eget.rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec
        molestie. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
      <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
    </div>
  );
}
