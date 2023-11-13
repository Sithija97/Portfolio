import express from "express";
import { protect } from "../middleware/index.js";
import {
  createIssue,
  deleteIssue,
  getIssue,
  getIssues,
  updateIssue,
} from "../controllers/issue.controller.js";
const issueRouter = express.Router();

issueRouter.post("/", protect, createIssue);
issueRouter.get("/", protect, getIssues);
issueRouter.get("/:id", protect, getIssue);
issueRouter.patch("/:id", protect, updateIssue);
issueRouter.delete("/:id", protect, deleteIssue);

export { issueRouter };
