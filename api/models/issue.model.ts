import mongoose, { Schema, model } from "mongoose";
import { IIssue } from "../interfaces/index.js";

const issueSchema = new Schema<IIssue>(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    description: {
      type: String,
      default: "",
    },
    reporter: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["Open", "In Progress", "Resolved", "Closed"],
      default: "Open",
    },
    assignee: {
      type: Schema.Types.ObjectId || null,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Issue = mongoose.model("Issue", issueSchema);
export { Issue };
