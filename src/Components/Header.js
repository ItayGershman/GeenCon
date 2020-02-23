import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import logo from "../images/logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaSearch, FaRegBell } from "react-icons/fa";
import Avatar from "../images/avatar.jpg";


const styles = theme => ({
  page: {
    background: "#FFFFFF",
    position:'sticky',
    width: "100%",
    height: 100,
    display:'flex',

  },
  logo: {
    width: 205,
    height: 144,
    marginLeft: 36,
    marginTop: -50,
    backgroundImage: `url('${logo}') `,
    background: "no-repeat",
    border: "transparent",
  },
  search: {
    width: 422,
    height: 40,
    marginLeft: 422,
    marginTop: 21,
    borderRadius: 100,
    borderColor:'linear-gradient(179.64deg, #74FF82 -13.56%, #1949F5 158.3%)'
  },
  searchIcon: {
    marginRight: 20
  },
  avatar:{
      verticalAlign:'middle',
      width:50,
      height:50,
      borderRadius:'50%',
      marginTop:23,
      marginLeft:52,
      cursor:'pointer'
  },
  name:{
      marginTop:35,
      marginLeft:11,
      fontFamily:'Poppins',
      fontStyle:'normal',
      fontWeight:'normal',
      fontSize:'12',
      color:'#858585',
      cursor:'pointer'
  },
  notification:{
      marginTop:29,
      marginLeft:43,
      width:21,
      height:25,
      cursor:'pointer'
  }
});

class Header extends Component {
  constructor(props) {
    super(props);
  }

  imagePress = ()=>{
      alert("name pressed");
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.page}>
        <Router>
          <Link to="/">
            <div className={classes.logo}></div>
          </Link>
        </Router>
        
        <input
          className={classes.search}
          type="search"
          placeholder="    Search"
        ></input>
        <img src={Avatar} alt="Avatar" className={classes.avatar} onClick={this.imagePress}></img>
        <p className={classes.name} onClick={this.imagePress}>Ramon Ridwan</p>
        <span><FaRegBell className={classes.notification}/></span>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
