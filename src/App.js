import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import axios from "axios";
import MobileHeader from "./MobileComponents/MobileHeader";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CheckboxesCategory from "./Components/CheckboxesCategory";
import {categories} from './Constants/Consts';
import moment from "moment";
import MobileUpperNav from './MobileComponents/MobileUpperNav';
import SimpleBottomNavigation from './MobileComponents/MobileBottomNav';
import MobileBody from './MobileComponents/MobileBody';
import MobileForm from "./MobileComponents/MobileForm";

const useStyles = makeStyles({
  page: {
    background: "#FFF9FE",
    height:'100%'
  },
  main: {
    display: "flex"
  }
});
localStorage.setItem("categories", JSON.stringify(categories));
const App = props => {
  const classes = useStyles();
  const [acategories, setCategories] = useState([]);
  const [conventions, setConventions] = useState([]);
  const [didFetch, setDidFetch] = useState(false);
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState({});
  const [checkBoxed, setCheckBoxed] = useState(false);
  const [categoriesChecked, setCategoriesChecked] = useState([]);
  const [gotIsClicked, setGotIsClicked] = useState(false);
  const matches = useMediaQuery('(min-width:415px)');

  const fetchData = async () => {
    try {
      const results = await axios.get(
        `https://greencon.herokuapp.com/admin/getAllConventions`
      );
      setConventions(results.data);
      setDidFetch(true);
    } catch (err) {
      console.log(err);
    }
  };

  const convertCategoryName = str => {
    let strConverted = str.replace(/([A-Z])/g, ' $1');
    return strConverted.charAt(0).toUpperCase() + strConverted.slice(1).toLowerCase();
  };

  const onAddConvention = async (title, category, date, location, price, description) => {
    category = convertCategoryName(category);
    console.log(date.value);
    const dbDate = new Date(date.value);
    date = moment(date.value).utc().format();
    console.log(date);
    const params = {
      title: title,
      category: category,
      start: dbDate,
      end: dbDate,
      location: location,
      price: price,
      description: description,
      lecturerProfile: { //needs to be dynamic
        firstName: "Chen",
        lastName: "Gutman",
        company: "El-Al",
        headline: "Flight Manager",
        email: "chen.g@gmail.com"
      }
    }
    console.log(params);

    const result = await axios.post(`https://greencon.herokuapp.com/creator/convention`,  params);
    console.log(result);
    this.setState({ newConvention: [...this.state.newConvention, result.data] })
    //   .then(res => {
    //     this.setState({ newConvention: [...this.state.newConvention, res.data] })
    //   })
    //   .catch(err => console.error(err));
    // console.log("we did it");
    return (
      <MobileForm params={params}/>
    )
  }

  useEffect(() => {
    const getCategories = JSON.parse(localStorage.getItem(categories));
    setCategories(categories);
    fetchData();
  }, []);

  const isClicked = (flag) => {
    setGotIsClicked(flag);
  };

  useEffect(() => {
  }, [gotIsClicked])

  

  if (logged === false) {
    return <Login logged={setLogged} user={setUser} />;
  }
  if (checkBoxed === false) {
    return (
      <CheckboxesCategory
        checkBoxed={setCheckBoxed}
        categoriesChecked={setCategoriesChecked}
      />
    );
  }
  if (gotIsClicked) {
    return <MobileForm click={isClicked} onAddConvention={onAddConvention} />
  } else if (matches === true && didFetch) {
    return (
      <div className={classes.page}>
        <Header user={user} />
        <div className={classes.main}>
          <Nav
            appCategories={acategories}
            appConventions={conventions}
            user={user}
            categoriesChecked={categoriesChecked}
          />
        </div>
        <Footer style={{ flexWrap: "nowrap" }} />
      </div>
    );
  } else if (didFetch) {
    return (
      <div className={classes.mobile}>
        <MobileHeader />
        <MobileUpperNav />
        <MobileBody click={isClicked} />
        <SimpleBottomNavigation />
      </div>
    )
  } else return null;
};
export default App;
