import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import logo from "../images/logo.png";
import { FaEllipsisH, FaEllipsisV } from "react-icons/fa";

const styles = theme => ({
  box: {
    width: 313,
    height: 164,
    marginLeft: 67,
    background: "#FFFFFF",
    display: "flex"
  },
  image: {
    backgroundImage: `url('${logo}') `,
    width: 109,
    height: 114,
    marginLeft: 13,
    marginTop: 23
  },
  text: {
    marginLeft: 13
  },
  headline: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#858585",
    margin: 0
  },
  place: {
    color: "#1CD1A1",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "30px",
    margin: 0
  },
  lecturer: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#858585",
    margin: 0
  },
  dots: {
    marginLeft: 160,
    cursor: "pointer"
  }
});

class Suggested extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  dots = () => {
    alert("dots");
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.box}>
        <div>
          <img className={classes.image}></img>
        </div>
        <div className={classes.text}>
          <FaEllipsisV className={classes.dots} onClick={this.handleShow} />
          <p className={classes.headline}>
            Global Warming - Your Responsibility
          </p>
          <p className={classes.lecturer}>By Dr.Itay Dagan</p>
          <div>
            <p className={classes.place}>1.1.2020 19:30-21:00</p>
            <p className={classes.place}>Tel-Aviv</p>
          </div>
        </div>
      </div>
    );
  }
}

Suggested.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Suggested);
