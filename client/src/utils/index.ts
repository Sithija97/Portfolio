import { IIssue } from "../models";

// Function to count issues based on status
export const countByStatus = (issues: IIssue[], status: string) => {
  return issues.filter((issue) => issue.status === status).length;
};

// Function to get the percentage
export const percentageByStatus = (issues: IIssue[], status: string) => {
  const count = issues.filter((issue) => issue.status === status).length;
  const percentage = (count / issues.length) * 100;
  const roundedPercentage = Math.round(percentage);
  return roundedPercentage;
};
