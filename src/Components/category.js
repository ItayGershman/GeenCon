import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import logo from "../images/logo.png";


const styles = theme => ({
  element: {
    height: 200,
    width: 150,
    background:'#FFFFFF',
    marginLeft:15,
    marginTop:30
  },
  elementText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "24px",
    background: "linear-gradient(179.52deg, #74FF82 -13.56%, #1949F5 158.3%)",
    textAlign:'center'
  },
  elementImage: {
    width: 150,
    height: 150,
  }
});

class Tip extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
        <div className={classes.element}>
            <div >
                <p className={classes.elementText}>Air pollution</p>
                <img style={{width:150}}className={classes.elementImage } src={logo}></img>
            </div>
            
        </div>
    );
  }
}

Tip.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Tip);
