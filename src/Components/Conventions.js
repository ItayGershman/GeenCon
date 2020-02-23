import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import Suggested from "./Suggested";
import Tip from "./Tip";
import CalendarElement from "./Calendar";
import Categories from "./Categories";

const styles = theme => ({
  text: {
    marginLeft: 80,
    marginTop: 30,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#858585"
  },
  elements: {
    display: "flex"
  },
  tipsElement: {
    textAlign: "center"
  }
});

class Conventions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{ display: "flex", height: "2000px" }}>
        <div>
          <div className={classes.text}>
            <p>{this.props.page}</p>
          </div>
          <div className={classes.text}>
            <p>{this.props.secondTitle}</p>
          </div>
          {/* map */}
          <div style={{ display: "flex" }}>
            <div style={{ marginTop: 30 }}>
              <Suggested />
            </div>
            <div style={{ marginTop: 30 }}>
              <Suggested />
            </div>
          </div>
        </div>
        <div className={classes.tipsElement}>
          <Tip />
        </div>
      </div>
    );
  }
}

Conventions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Conventions);
