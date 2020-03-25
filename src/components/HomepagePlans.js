import React from "react";
// import { Link } from "react-router";
import ButtonBase from "@material-ui/core/ButtonBase";
import { ThemeProvider } from "@material-ui/core";
import SiteTheme from "../styles/js/Theme";

export class PlanButton extends React.Component {
  render() {
    return (
      <ThemeProvider theme={SiteTheme}>
        <ButtonBase
          imageButton
          focusRipple
          key={this.props.key}
          className="PlanButton"
          focusVisibleClassName="focusVisible"
        >
          <span
            className="imgSrc"
            style={{ backgroundImage: 'url("../static/img/mtns.jpg")' }}
          />
          <span className="imageBackdrop" />
          <span clasName="imageButton">{this.props.title}</span>
        </ButtonBase>
      </ThemeProvider>
    );
  }
}
