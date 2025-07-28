// import DonationCandidates from "../components/DonationCandidates";
import axios from "axios";

const baseUrl = "http://localhost:5114/api/"; // Replace with your actual API base URL

export default {
  DonationCandidate(url = baseUrl + "DonationCandidates/") {
    return {
      fetchAll: () => axios.get(url),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: (id) => axios.delete(url + "/" + id),
    };
  },
};
