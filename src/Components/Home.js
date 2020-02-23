import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import Suggested from "./Suggested";
import Tip from "./Tip";
import CalendarElement from './Calendar';
import Categories from './Categories';

const styles = theme => ({
  text: {
    marginLeft: 80,
    marginTop: 30,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#858585'
  },
  textBread: {
    marginLeft: 80,
    marginTop: 30,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: '12px',
    lineHeight: '24px',
    color: '#858585'
  },
  elements: {
    display: "flex"
  },
  tipsElement:{
    textAlign:'center'
  }
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{display:'flex',height:'2000px'}}>
        <div >
          <div className={classes.textBread}>
            <p>{this.props.page}</p>
          </div>
          <div className={classes.text}>
            <p>{this.props.secondTitle}</p>
          </div>
          <div style={{ display: "flex"}}>
            <div style={{marginTop:30}}>
              <Suggested />
            </div>
            <div style={{marginTop:30}}>
              <Suggested />
            </div>
          </div>
          <Categories />
        </div>
        <div className={classes.tipsElement}>
            <Tip />
            <CalendarElement />
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
