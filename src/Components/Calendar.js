import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import Calendar from "react-calendar-material";

const styles = theme => ({
  box: {
    width: 420,
    height: 626,
    marginLeft: 55,
    marginTop: 20,
    background: "#FFFFFF",
    // border: "1px solid #F0F0F0",
    borderRadius: "10px"
  }
});

class CalendarElement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.box}>
        <Calendar
          accentColor={"rgb(0, 193, 166)"}
          orientation={"flex-col"}
          showHeader={true}
          onDatePicked={d => {
            console.log("onDatePicked", d);
          }}
        />
      </div>
    );
  }
}

CalendarElement.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CalendarElement);
