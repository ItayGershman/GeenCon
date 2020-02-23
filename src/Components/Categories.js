import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import Category from './category';

const styles = theme => ({
  categories: {
    width: 679,
    height: 529,
    marginTop:31,
    marginLeft:64,
    background: "#FFFFFF",
    border: "2px solid #F0F0F0",
    borderRadius: "10px",
    display:'flex',
    flexWrap: 'wrap',
  },
  title:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#858585',
    marginLeft:78,
    marginTop:31
    
  }
});

class Categories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
        
        <div>
            <p className={classes.title}><b>Categories</b></p>
            <div className={classes.categories}>
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
            </div>
        </div>
    );
  }
}

Categories.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Categories);
