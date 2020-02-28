import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

import { List, ListItem } from "@material-ui/core";
import {
  FaHome,
  FaRegCalendarCheck,
  FaRecycle,
  FaCircle,
  FaRegFlushed
} from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Conventions from "./Conventions";
// import CalendarPage from './CalendarPage';
// import CalendarP from './CalendarPage2';

const styles = theme => ({
  list: {
    background: "#FFFFFF",
    maxHeight: "100%",
    width: 290,
    border: "2px solid #F0F0F0",
    margin: 0,
    paddingTop: 59
  },
  fields: {
    paddingTop: 0,
    marginBottom: 40
  },
  icons: {
    marginRight: 20,
    marginLeft: 54
  },
  notify: {
    background: "linear-gradient(179.64deg, #74FF82 -13.56%, #1949F5 158.3%)",
    color: "transparent",
    borderRadius: "50%"
  },
  links: {
    textDecoration: "none",
    flex: "1 1 auto",
    color: "inherit"
  },
  text: {
    marginLeft: 80,
    marginTop: 30,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#858585"
  }
});

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes,
      appCategories,
      appConventions,
      user,
      categoriesChecked
    } = this.props;
    return (
      <Router style={{ display: "flex" }}>
        <List className={classes.list} component="nav">
          <ListItem button className={classes.fields}>
            <FaHome className={classes.icons} />

            <Link to="/" className={classes.links}>
              Home
            </Link>
          </ListItem>
          <ListItem button className={classes.fields}>
            <FaRegFlushed className={classes.icons} />
            <Link to="/Conventions" className={classes.links}>
              Conventions
            </Link>
            {/* <FaCircle className={classes.notify} /> */}
          </ListItem>
          <ListItem button className={classes.fields}>
            <FaRegCalendarCheck className={classes.icons} />
            <Link to="/Schedule" className={classes.links}>
              Schedule
            </Link>
            {/* <FaCircle className={classes.notify} /> */}
          </ListItem>
          <ListItem button className={classes.fields}>
            <FaRegFlushed className={classes.icons} />
            <Link to="/CreateConvention" className={classes.links}>
              Create Convention
            </Link>
            {/* <FaCircle className={classes.notify} /> */}
          </ListItem>
          <ListItem button className={classes.fields}>
            <FaRecycle className={classes.icons} />
            <Link to="/RecycleFacilities" className={classes.links}>
              Recycle Facilities
            </Link>
            {/* <FaCircle className={classes.notify} /> */}
          </ListItem>
          <ListItem button className={classes.fields}>
            <FaRegFlushed className={classes.icons} />
            <Link to="/Statistic" className={classes.links}>
              Statistic
            </Link>
            {/* <FaCircle className={classes.notify} /> */}
          </ListItem>
          <ListItem button className={classes.fields}>
            <FaRegFlushed className={classes.icons} />
            <Link to="/Settings" className={classes.links}>
              Settings
            </Link>
            {/* <FaCircle className={classes.notify} /> */}
          </ListItem>
          <ListItem button className={classes.fields}>
            <FaRegFlushed className={classes.icons} />
            <Link to="/LogOut" className={classes.links}>
              Log out
            </Link>
          </ListItem>
        </List>
        <Switch>
          <Route exact path="/">
            <Homepage
              appCategories={appCategories}
              appConventions={appConventions}
              user={user}
              categoriesChecked={categoriesChecked}
            />
          </Route>
          <Route path="/Conventions">
            <ConventionsPage appConventions={appConventions} user={user} />
          </Route>
          <Route path="/Schedule">
            <Schedule />
          </Route>
          <Route exact path="/CreateConvention">
            <CreateConvention />
          </Route>
          <Route exact path="/RecycleFacilities">
            <RecycleFacilities />
          </Route>
          <Route exact path="/Statistic">
            <Statistic />
          </Route>
          <Route exact path="/Settings">
            <Settings />
          </Route>
          <Route exact path="/LogOut">
            <LogOut />
          </Route>
        </Switch>
      </Router>
      //   </div>
    );
  }
}

function Homepage(props) {
  return (
    <div style={{ justifyContent: "flex-end" }}>
      <Home
        appCategories={props.appCategories}
        appConventions={props.appConventions}
        user={props.user}
        categoriesChecked={props.categoriesChecked}
        page={"Home page"}
        secondTitle={"Suggested for you"}
        style={{ display: "flex" }}
      />
    </div>
  );
}

function ConventionsPage(props) {
  return (
    <div>
      <Conventions
        appConventions={props.appConventions}
        user={props.user}
        page={"Conventions"}
        secondTitle={"Last search"}
        thirdTitle={"Most popular"}
        fourthTitle={"Based on conventions you attended"}
        style={{ display: "flex" }}
      />
    </div>
  );
}

function Schedule() {
  return (
    <div>
      <h2>Schedule</h2>
      {/* <CalendarP /> */}
    </div>
  );
}

function CreateConvention() {
  return (
    <div>
      <h2>Create Convention</h2>
    </div>
  );
}
function RecycleFacilities() {
  return (
    <div>
      <h2>Recycle Facilities</h2>
    </div>
  );
}
function Statistic() {
  return (
    <div>
      <h2>Statistic</h2>
    </div>
  );
}
function Settings() {
  return (
    <div>
      <h2>Settings</h2>
    </div>
  );
}
function LogOut() {
  return (
    <div>
      <h2>Log Out</h2>
    </div>
  );
}
Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Nav);
