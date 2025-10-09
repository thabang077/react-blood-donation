import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
  Select,
  Button,
  FormHelperText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useForm from "./UseForm";
import { withStyles } from "@mui/styles";
import { connect } from "react-redux";
import * as actions from "../actions/donationCandidate";

//Styling
const useStyles = () => ({
  root: {
    "& .MuiTextField-root": {
      margin: "10px",
      minWidth: 230,
    },
  },
  formControl: {
    margin: "10px",
    minWidth: 230,
  },
});

const initialFieldValues = {
  fullName: "",
  phoneNumber: "",
  email: "",
  age: "",
  address: "",
  bloodGroup: "",
};

const DonationCandidatesForm = ({ classes, ...props }) => {
  // Validation
  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("fullName" in fieldValues)
      temp.fullName =
        fieldValues.fullName.trim() !== "" ? "" : "Full Name is required";

    if ("phoneNumber" in fieldValues)
      temp.phoneNumber = /^[0-9]{10}$/.test(fieldValues.phoneNumber)
        ? ""
        : "Phone Number must be 10 digits";

    if ("bloodGroup" in fieldValues)
      temp.bloodGroup = fieldValues.bloodGroup ? "" : "Blood Group is required";

    if ("email" in fieldValues)
      temp.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValues.email)
        ? ""
        : "Invalid email address";

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const [values, setValues, errors, setErrors, handleInputChange, resetForm] =
    useForm(initialFieldValues, validate);

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);

  React.useEffect(() => {
    if (inputLabel.current) {
      setLabelWidth(inputLabel.current.offsetWidth);
    }
  }, []);

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      props.createDonatingCandidates(values, () => {
        window.alert("Inserted.");
      });
    }
  };

  useEffect(() => {
    if (props.currentId != 0)
      setValues({
        ...props.DonationCandidateList.find((x) => x.id == props.currentId),
      });
  }, [props.currentId]);

  return (
    <>
      <form
        autoComplete="off"
        noValidate
        className={classes.root}
        onSubmit={handleSubmit}
      >
        <Grid container>
          <Grid size={6}>
            <TextField
              name="fullName"
              variant="outlined"
              label="full Name"
              value={values.fullName || initialFieldValues.fullName}
              onChange={handleInputChange}
              required={true}
              error={Boolean(errors.fullName)}
              helperText={errors.fullName}
            />
            <TextField
              name="email"
              variant="outlined"
              label="Email"
              value={values.email || initialFieldValues.email}
              onChange={handleInputChange}
              required={true}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />

            <FormControl
              required
              variant="outlined"
              style={{ minWidth: "204px" }}
              error={Boolean(errors.bloodGroup)}
              helperText={errors.bloodGroup}
            >
              <InputLabel ref={inputLabel}>Blood Group</InputLabel>
              <Select
                name="bloodGroup"
                value={values.bloodGroup || initialFieldValues.bloodGroup}
                onChange={handleInputChange}
                labelwidth={labelWidth}
                className={classes.formControl}
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
              {<FormHelperText>{errors.bloodGroup}</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid size={6}>
            <TextField
              name="phoneNumber"
              variant="outlined"
              label="Phone Number"
              value={values.phoneNumber || initialFieldValues.phoneNumber}
              onChange={handleInputChange}
              required={true}
              error={Boolean(errors.phoneNumber)}
              helperText={errors.phoneNumber}
            />
            <TextField
              name="age"
              variant="outlined"
              label="Age"
              value={values.age || initialFieldValues.age}
              onChange={handleInputChange}
            />
            <TextField
              name="address"
              variant="outlined"
              label="Address"
              value={values.address || initialFieldValues.address}
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

const mapStateToProps = (state) => ({
  DonationCandidateList: state.DonationCandidate.list,
});

const mapActionsToProps = {
  createDonatingCandidates: actions.create,
  updateDonatingCandidates: actions.update,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(useStyles)(DonationCandidatesForm));
