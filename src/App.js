import logo from "./logo.svg";
import "./App.css";
import { store } from "./actions/strore";
import { Provider } from "react-redux";
import DonationCandidates from "./components/DonationCandidates";
import DonationCandidatesForm from "./components/DonationCandidateForm";
import { Container } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">{/* <DonationCandidates /> */}</Container>
      <DonationCandidates />
      <DonationCandidatesForm />
    </Provider>
  );
}

export default App;
