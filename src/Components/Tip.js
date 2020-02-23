import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import {
    FaRegLightbulb
  } from "react-icons/fa";

const styles = theme => ({
  page: {
    background: "yellow",
    width: "100%",
  },
  tipTitle:{
    marginTop:45,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#858585'
  },
  tipBox:{
    width:312,
    background: '#FFFFFF',
    border: '2px solid #F0F0F0',
    borderRadius: '10px',
    marginLeft:87,
    marginRight:59
  },
  tipBoxText:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '21px',
    textTransform: 'uppercase',
    color: '#858585'
  }
});

class Tip extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.tipTitle}>
            
          <p><FaRegLightbulb />Tip of the day</p>
        </div>
        <div className={classes.tipBox}>
          <p className={classes.tipBoxText}>DONT FORGET TO CLOSE THE LIGHTs WHEN YOU LEAVE THE HOUSE</p>
        </div>
      </div>
    );
  }
}

Tip.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Tip);
