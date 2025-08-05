import { Grid, TextField } from "@mui/material";
import React from "react";

const DonationCandidatesForm = (props) => {
  return (
    <>
      <form autoComplete="off" noValidate>
        <Grid container>
          <Grid size={6}>
            <TextField name="fullName" variant="outlined" label="full Name" />
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default DonationCandidatesForm;
