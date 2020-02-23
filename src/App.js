import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Suggested from "./Components/Suggested";
import Categories from "./Components/Categories";
import Tip from "./Components/Tip";
import Calendar from "./Components/Calendar";
import Main from "./Components/Home";
import Footer from "./Components/Footer";

const styles = theme => ({
  page: {
    background: "#E5E5E5",
    width: "100%",
    height: "100%"
  },
  main: {
    display: "flex"
  }
});

const categories = [
  {
    name: "Air pollution"
  },
  {
    name: "Radiation damage"
  },
  {
    name: "Liquid waste"
  },
  {
    name: "water pollution"
  },
  {
    name: "Solid waste"
  },
  {
    name: "Noise hazards"
  }
];

localStorage.setItem('categories',JSON.stringify(categories));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentWillMount(){
    const getCategories = JSON.parse(localStorage.getItem(categories));
    this.setState({getCategories});
    alert(getCategories);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.page}>
        <Header />
        <div className={classes.main}>
          <Nav />
        </div>
        <Footer style={{ flexWrap: "nowrap" }} />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
