import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import 'typeface-poppins';

const styles = theme => ({

});

class MobileBody extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className ={classes.body}>
            </div>

        );
    }
}

MobileBody.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MobileBody);
