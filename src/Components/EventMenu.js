import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";


const styles = theme => ({
    box: {
        position: 'absolute',
        width: '88px',
        height: '55px',
        left: '1017px',
        top: '259px',
    },
    attend: {
        position: 'relative',
        width: '88px',
        height: '27px',
        background: 'linear-gradient(179.44deg, #74FF82 -13.56%, #1949F5 158.3%)',
    },
    hide: {
        position: 'relative',
        width: '88px',
        height: '27px',
        background: '#FFFFFF',
        border: '1px solid #EFEFEF',
    },
    textAttend: {
        position: 'relative',
        width: '37px',
        height: '15px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '10px',
        lineHeight: '15px',
        textAlign: 'center',
        color: '#FFFFFF',
    },
    textHide: {
        position: 'relative',
        width: '37px',
        height: '15px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '10px',
        lineHeight: '15px',
        textAlign: 'center',
        color: '#858585',
    },
});

class EventMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.box}>
                <div className={classes.attend}>
                    <div className={classes.textAttend}>
                        <p>ATTEND</p>
                    </div>
                </div>
                <div className={classes.hide}>
                    <div className={classes.textHide}>
                        <p>HIDE</p>
                    </div>
                </div>
            </div>
        );
    }
}



EventMenu.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventMenu);
