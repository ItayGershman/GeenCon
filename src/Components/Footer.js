import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import {
    FaRegLightbulb
  } from "react-icons/fa";

const styles = theme => ({
  background:{
        background: '#828282',
        border: '2px solid #F7F7F7',
        textAlign:'center',
        height:113
  },
  text:{
      paddingTop:'40px'
  }
});

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
          <p className={classes.text}>All rights reserved to Aviel dagan & itay gershman</p>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
