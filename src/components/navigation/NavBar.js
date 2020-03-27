import React from "react";
import { NavLink } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <React.Fragment>
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
    </React.Fragment>
  );
}
