import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
  Select,
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

const initialFieldValues = {
  fullName: "",
  phoneNumber: "",
  email: "",
  age: "",
  address: "",
  bloodGroup: "",
};

const DonationCandidatesForm = (classes, ...props) => {
  // const [values, setValues] = useState(initialFieldvalues);

  const [values, setValues, handleInputChange] = useForm(initialFieldValues);

  return (
    <>
      <form autoComplete="off" noValidate>
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
              <InputLabel>Blood Group</InputLabel>
              <Select
                name="bloodGroup"
                value={values.bloodGroup}
                onChange={handleInputChange}
              >
                <MenuItem value="">Select Blood Group</MenuItem>
                <MenuItem value="A+">A +ve</MenuItem> *
                <MenuItem value="A+">A -ve</MenuItem>
                <MenuItem value="A+">B +ve</MenuItem>
                <MenuItem value="A+">B -ve</MenuItem>
                <MenuItem value="A+">AB +ve</MenuItem>
                <MenuItem value="A+">AB -ve</MenuItem>
                <MenuItem value="A+">O +ve</MenuItem>
                <MenuItem value="A+">O -ve</MenuItem>
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
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default DonationCandidatesForm;
