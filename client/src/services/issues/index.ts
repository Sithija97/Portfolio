import axios from "axios";

const BASE_URL = "/api/issues";

const getIssues = async () => {
  const response = await axios.get(`${BASE_URL}/all`);
  return response;
};

const getIssuesByUser = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response;
};

const IssueService = {
  getIssues,
  getIssuesByUser,
};

export default IssueService;
