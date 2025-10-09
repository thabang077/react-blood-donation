import { connect } from "react-redux";
import React, { use } from "react";
import * as actions from "../actions/donationCandidate";
import { useEffect } from "react";
import {
  Paper,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import DonationCandidatesForm from "./DonationCandidateForm";
import { withStyles } from "@mui/styles";

const DonationCandidates = ({ classes, ...props }) => {
  useEffect(() => {
    props.fetchAllDonatingCandidates();
  }, []);

  return (
    <Paper>
      <Grid container>
        <Grid size={6}>
          <DonationCandidatesForm />
        </Grid>
        <Grid size={6}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Blood Group</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.DonationCandidateList.map((record, index) => {
                  return (
                    <TableRow key={index} hover>
                      <TableCell>{record.fullName}</TableCell>
                      <TableCell>{record.phoneNumber}</TableCell>
                      <TableCell>{record.bloodGroup}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  DonationCandidateList: state.DonationCandidate.list,
});

const mapActionsToProps = {
  fetchAllDonatingCandidates: actions.fetchAll,
};

export default connect(mapStateToProps, mapActionsToProps)(DonationCandidates);
