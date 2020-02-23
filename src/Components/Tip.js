import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import idea from "../images/idea.png";
import 'typeface-poppins';


const styles = theme => ({
  page: {
    background: "yellow",
    width: "100%",
  },
  tipTitle: {
    marginTop: 45,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#858585'
  },
  tipBox: {
    width: 312,
    background: '#FFFFFF',
    border: '2px solid #F0F0F0',
    borderRadius: '10px',
    marginLeft: 87,
    marginRight: 59,
    marginTop: '55px',
  },
  tipBoxText: {
    color: '#858585',
    height: '42px',
    left: '76.93%',
    right: '4.4%',
    top: 'calc(50% - 42px/2 - 1062.5px)',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '21px',
  },
  idea: {
    backgroundImage: `url('${idea}') `,
    position: 'absolute',
    width: '20px',
    height: '20px',
    left: '1225px',
    top: '128px',
  },
  tipHeadline: {
    width: '130px',
  },
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
          <div className={classes.idea}>
            <p className={classes.tipHeadline}>Tip of the day</p>
          </div>
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
