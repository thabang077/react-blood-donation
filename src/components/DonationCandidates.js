import { connect } from "react-redux";
import React, { use } from "react";
import * as actions from "../actions/donationCandidate";
import { useEffect } from "react";
import { paper, Grid } from "@mui/material";
import DonationCandidatesForm from "./DonationCandidateForm";

const DonationCandidates = (props) => {
  useEffect(() => {
    props.fetchAllDonatingCandidates();
  }, []);
  return (
    <paper>
      <Grid container>
        <Grid item xs={6}>
          {/* <Grid item xs={12} sm={6} md={4}> */}
          <DonationCandidatesForm />
        </Grid>
        <Grid item xs={6}>
          <div>List of candidates</div>
        </Grid>
      </Grid>
    </paper>
  );
};

const mapStateToProps = (state) => ({
  DonationCandidateList: state.DonationCandidate,
});

const mapActionsToProps = {
  fetchAllDonatingCandidates: actions.fetchAll,
};

export default connect(mapStateToProps, mapActionsToProps)(DonationCandidates);
