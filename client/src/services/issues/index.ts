import axios from "axios";
import { addIssueInputs, updateIssueParams } from "../../models";

const BASE_URL = "/api/issues";

const addIssue = async (payload: addIssueInputs) => {
  const response = await axios.post(`${BASE_URL}`, payload);
  return response;
};

const getIssues = async () => {
  const response = await axios.get(`${BASE_URL}/all`);
  return response;
};

const getIssuesByUser = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response;
};

const updateIssue = async (payload: updateIssueParams) => {
  const { issueId, title, description, status, assignee } = payload;
  const issuePayload = { title, description, status, assignee };

  const response = await axios.patch(`${BASE_URL}/${issueId}`, issuePayload);
  return response;
};

const deleteIssue = async (issueId: string) => {
  const response = await axios.delete(`${BASE_URL}/${issueId}`);
  return response;
};

const IssueService = {
  addIssue,
  getIssues,
  getIssuesByUser,
  updateIssue,
  deleteIssue,
};

export default IssueService;
