import { IIssue } from "../models";

// Function to count issues based on status
export const countByStatus = (issues: IIssue[], status: string) => {
  return issues.filter((issue) => issue.status === status).length;
};
