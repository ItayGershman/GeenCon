import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import 'typeface-poppins';

const styles = theme => ({
    itemBox: {
        position: 'absolute',
        width: '335px',
        height: '123px',
        left: '7px',
        top: '136px',
    },
});

class MobileConventionItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.itemBox}>
                
                 </div>
        );
    }
}

MobileConventionItem.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MobileConventionItem);