import { connect } from "react-redux";
import React, { use, useState } from "react";
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
  ButtonGroup,
} from "@mui/material";
import DonationCandidatesForm from "./DonationCandidateForm";
import { withStyles } from "@mui/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const DonationCandidates = ({ classes, ...props }) => {
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    props.fetchAllDonatingCandidates();
  }, []);

  return (
    <Paper elevation={3}>
      <Grid container>
        <Grid size={6}>
          <DonationCandidatesForm {...{ currentId, setCurrentId }} />
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
                      <tableCell>
                        <ButtonGroup variant="text">
                          <button>
                            <EditIcon
                              color="primary"
                              onClick={() => {
                                setCurrentId(record.id);
                              }}
                            />
                          </button>
                          <button>
                            <DeleteIcon color="secondary" />
                          </button>
                        </ButtonGroup>
                      </tableCell>
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
