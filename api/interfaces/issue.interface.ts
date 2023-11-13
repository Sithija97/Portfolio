import { Document, Types } from "mongoose";

export interface IIssue extends Document {
  title: string;
  description: string;
  user: Types.ObjectId;
  status: "Open" | "In Progress" | "Resolved" | "Closed";
  assignee?: Types.ObjectId | null;
}
