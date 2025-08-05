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

// const StyledPaper = styled(Paper)({
//   margin: theme.spacing(2),
//   padding: theme.spacing(2),
// });

const DonationCandidates = ({ classes, ...props }) => {
  useEffect(() => {
    props.fetchAllDonatingCandidates();
  }, []);

  return (
    <Paper elevation={3}>
      <Grid container>
        <Grid size={6}>
          {/* <Grid item xs={12} sm={6} md={4}> */}
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
                  console.log(props.DonationCandidateList);

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
