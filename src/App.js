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
import axios from 'axios'
import NoiseHazard from './images/NoiseHazard.png';
import AirPollution from './images/AirPollution.png';
import waterPollution from './images/waterPollution.png';
import liquidWaste from './images/liquidWaste.png';
import solidWaste from './images/solidWaste.png';
import radiation from './images/radiation.png';

const styles = theme => ({
  page: {
    background: "#E5E5E5",
  },
  main: {
    display: "flex"
  }
});

const categories = [
  {
    name: "Global warming",
    img: radiation
  },
  {
    name: "Recycle issues",
    img: liquidWaste
  },
  {
    name: "Recycle",
    img: solidWaste
  },
  {
    name: "water pollution",
    img: waterPollution
  },
  {
    name: "Air pollution",
    img: AirPollution
  },
  {
    name: "Noise hazards",
    img: NoiseHazard
  }
];

localStorage.setItem('categories',JSON.stringify(categories));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      conventions:[]
    };


  }

  shouldComponentUpdate(){

    //get Conventions
    let conventions;
    axios.get(`https://greencon.herokuapp.com/admin/getAllConventions`)
      .then(res => {
        conventions = res.data;
        this.setState({ conventions:conventions });
      });
      console.log(conventions);
      const getCategories = JSON.parse(localStorage.getItem('categories'));
    this.setState({categories:getCategories});

  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.page}>
        <Header />
        <div className={classes.main}>
          {/* {console.log(this.state.conventions)} */}
          <Nav state={this.state.conventions[0]}/>
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
