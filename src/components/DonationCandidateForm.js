import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
  Select,
  Button,
  // withStyles,
} from "@mui/material";
import React, { useState } from "react";
import useForm from "./UseForm";
// import { makeStyles } from "@mui/styles";
// import { withStyles } from "@mui/material/styles";

// const withStyles = {
//   root: {
//     FormControl: {
//       // margin: theme.spacing(1),
//       minWidth: 230,
//     },
//   },
// };

// Material-UI select component requires a label width to be set for alighnment purposes.

const initialFieldValues = {
  fullName: "",
  phoneNumber: "",
  email: "",
  age: "",
  address: "",
  bloodGroup: "",
};

const DonationCandidatesForm = (props) => {
  // const [values, setValues] = useState(initialFieldvalues);

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const [values, setValues, handleInputChange] = useForm(initialFieldValues);

  return (
    <>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container>
          <Grid size={6}>
            <TextField
              name="fullName"
              variant="outlined"
              label="full Name"
              value={values.fullName}
              onChange={handleInputChange}
            />
            <TextField
              name="email"
              variant="outlined"
              label="Email"
              value={values.email}
              onChange={handleInputChange}
            />
            {/* <TextField
              name="bloodGroup"
              variant="outlined"
              label="Blood Group"
              value={values.bloodGroup}
              onChange={handleInputChange}
            /> */}
            <FormControl
              variant="outlined"
              // size="medium"
              style={{ minWidth: "204px" }} // className={classes.formControl}
            >
              <InputLabel ref={inputLabel}>Blood Group</InputLabel>
              <Select
                name="bloodGroup"
                value={values.bloodGroup}
                onChange={handleInputChange}
                labelWidth={labelWidth}
              >
                <MenuItem value="">Select Blood Group</MenuItem>
                <MenuItem value="A+">A +ve</MenuItem>
                <MenuItem value="A-">A -ve</MenuItem>
                <MenuItem value="B+">B +ve</MenuItem>
                <MenuItem value="B-">B -ve</MenuItem>
                <MenuItem value="AB+">AB +ve</MenuItem>
                <MenuItem value="AB-">AB -ve</MenuItem>
                <MenuItem value="O+">O +ve</MenuItem>
                <MenuItem value="O-">O -ve</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={6}>
            <TextField
              name="phoneNumber"
              variant="outlined"
              label="Phone Number"
              value={values.phoneNumber}
              onChange={handleInputChange}
            />
            <TextField
              name="age"
              variant="outlined"
              label="Age"
              value={values.age}
              onChange={handleInputChange}
            />
            <TextField
              name="address"
              variant="outlined"
              label="Address"
              value={values.address}
              onChange={handleInputChange}
            />
            <div>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ margin: 10 }}
              >
                Submit
              </Button>
              <Button variant="outlined">Reset</Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default DonationCandidatesForm;
