import { Document, Types } from "mongoose";
import { IUser } from "./user.interface.js";

export interface IIssue extends Document {
  title: string;
  description: string;
  reporter: Types.ObjectId;
  status: "Open" | "In Progress" | "Resolved" | "Closed";
  assignee?: Types.ObjectId | null;
}

export interface IIssueWithUserDetails extends Document {
  title: string;
  description: string;
  reporter: IUser;
  status: "Open" | "In Progress" | "Resolved" | "Closed";
  assignee?: Types.ObjectId | null;
}
