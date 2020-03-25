import React from "react";

import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";

import { withRouter } from "react-router";
import { Link } from "react-router";

export function FloatingMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="menu"
        aria-haspopup="true"
        variant="contained"
        color="#fff"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem containerElement={<Link to="/" />} primaryText="Home">
          <ListItemText primary="Home" />
        </MenuItem>
        <MenuItem containerElement={<Link to="/Login" />} primaryText="Login">
          <ListItemText primary="Login" />
        </MenuItem>
        <MenuItem
          containerElement={<Link to="/Assessment" />}
          primaryText="Assessment Test"
        >
          <ListItemText primary="Assessment" />
        </MenuItem>
        <MenuItem
          containerElement={<Link to="/Contact" />}
          primaryText="Contact"
        >
          <ListItemText primary="Contact" />
        </MenuItem>
      </Menu>
    </div>
  );
}

export const RouterMenu = withRouter(FloatingMenu);
