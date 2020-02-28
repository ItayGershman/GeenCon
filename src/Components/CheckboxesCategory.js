import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Button} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

const categoriesChecked =[]

export default function CheckboxesCategory(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    airPollution: false,
    recycle: false,
    globalWarming: false,
    recycleIssues: false,
    waterPollution: false,
    noiseHazards: false
  });

  const handleChange = name => event => {
    categoriesChecked.push(name);
    setState({ ...state, [name]: event.target.checked });
  };

  const handleSubmit = () =>{    
    props.categoriesChecked(categoriesChecked);
    props.checkBoxed(true);
  }

  const {
    airPollution,
    Recycle,
    liquidWaste,
    RecycleIssues,
    waterPollution,
    noiseHazards
  } = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">
          Please choose categories you relate to
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={airPollution}
                onChange={handleChange("airPollution")}
                value="airPollution"
              />
            }
            label="Air Pollution"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={liquidWaste}
                onChange={handleChange("liquidWaste")}
                value="liquidWaste"
              />
            }
            label="Liquid Waste"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={RecycleIssues}
                onChange={handleChange("recycleIssues")}
                value="recycleIssues"
              />
            }
            label="Recycle issues"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={Recycle}
                onChange={handleChange("Recycle")}
                value="Recycle"
              />
            }
            label="Recycle"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={waterPollution}
                onChange={handleChange("waterPollution")}
                value="waterPollution"
              />
            }
            label="Water Pollution"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={noiseHazards}
                onChange={handleChange("noiseHazards")}
                value="noiseHazards"
              />
            }
            label="Noise Hazards"
          />
        </FormGroup>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
    </div>
  );
}
