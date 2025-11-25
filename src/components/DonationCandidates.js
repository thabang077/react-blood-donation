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
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    props.fetchAllDonatingCandidates();
  }, []);

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record?"))
      props.deleteDonatingCandidates(id, () => {
        window.alert("Deleted successfully");
      });
  };

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
                      <TableCell>
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
                            <DeleteIcon
                              color="secondary"
                              onClick={() => {
                                onDelete(record.id);
                              }}
                            />
                          </button>
                        </ButtonGroup>
                      </TableCell>
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
  deleteDonatingCandidates: actions.deelete,
};

export default connect(mapStateToProps, mapActionsToProps)(DonationCandidates);
