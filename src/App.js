import React, { useState, useEffect } from "react";
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

import axios from 'axios';
import NoiseHazard from './images/NoiseHazard.png';
import AirPollution from './images/AirPollution.png';
import waterPollution from './images/waterPollution.png';
import liquidWaste from './images/liquidWaste.png';
import solidWaste from './images/solidWaste.png';
import radiation from './images/radiation.png';
import EventMenu from './Components/EventMenu';
import MobileHeader from './MobileComponents/MobileHeader'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MobileUpperNav from './MobileComponents/MobileUpperNav';


const useStyles = makeStyles({
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
localStorage.setItem('categories', JSON.stringify(categories));
const App = (props) => {
  const classes = useStyles();
  const [acategories, setCategories] = useState([]);
  const [conventios, setConventions] = useState([]);
  const [didFetch, setDidFetch] = useState(false);
  const matches = useMediaQuery('(min-width:415px)');
      
  const fetchData = async () => {
    try {
      const results = await axios.get(`https://hands-app.herokuapp.com/post/showAllPosts`)
      console.log(results)
      setConventions(results.data)
      setDidFetch(true)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const getCategories = JSON.parse(localStorage.getItem(categories));
    setCategories(categories);
    fetchData();
  }, [])


  if (matches === true && didFetch) {
    return (
      <div className={classes.page}>
        <Header />
        <EventMenu />
        <div className={classes.main}>
          <Nav appCategories={acategories} appConventions={conventios} />
        </div>
        <Footer style={{ flexWrap: "nowrap" }} />
      </div>
    );
  }
  else if (didFetch) {
    return (
      <div>
        <MobileHeader />
        <MobileUpperNav />
      </div>

    )
  } else return null;

}



// App.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default App;
