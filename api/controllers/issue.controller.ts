import { Response } from "express";
import asyncHandler from "express-async-handler";
import { CustomRequest, IIssueWithUserDetails } from "../interfaces/index.js";
import { Issue } from "../models/issue.model.js";
import { User } from "../models/user.model.js";

const createIssue = asyncHandler(async (req: CustomRequest, res: Response) => {
  const { title, description } = req.body;

  if (!title) {
    res.status(400);
    throw new Error("Please fill the title");
  }

  const issue = await Issue.create({
    reporter: req.user._id,
    title,
    description,
  });

  res.status(201).json(issue);
});

const getIssues = asyncHandler(async (req: CustomRequest, res: Response) => {
  const issues = await Issue.find({ reporter: req.user._id })
    .populate("reporter")
    .lean()
    .sort("-createdAt");

  res.status(200).json(issues);
});

const getAllIssues = asyncHandler(async (req: CustomRequest, res: Response) => {
  const issues = await Issue.find()
    .populate("reporter")
    .lean()
    .sort("-createdAt");

  res.status(200).json(issues);
});

const getIssue = asyncHandler(async (req: CustomRequest, res: Response) => {
  const issue = await Issue.findById(req.params.id);

  if (!issue) {
    res.status(404);
    throw new Error("Issue not found");
  }

  if (issue.reporter.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Reporter is not authorized");
  }

  res.status(200).json(issue);
});

const updateIssue = asyncHandler(async (req: CustomRequest, res: Response) => {
  const { title, description, status, assignee } = req.body;
  const issue = await Issue.findById(req.params.id);

  if (!issue) {
    res.status(404);
    throw new Error("Issue not found");
  }

  if (issue.reporter.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Reporter is not authorized");
  }

  const updatedIssue = await Issue.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: title || issue.title,
      description: description || issue.description,
      status: status || issue.status,
      assignee: assignee || issue.assignee,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json(updatedIssue);
});

const deleteIssue = asyncHandler(async (req: CustomRequest, res: Response) => {
  const issue = await Issue.findById(req.params.id);

  if (!issue) {
    res.status(404);
    throw new Error("Issue not found");
  }

  if (issue.reporter.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Reporter is not authorized");
  }

  await issue.deleteOne();
  res.status(200).json(issue);
});

export {
  createIssue,
  getIssues,
  getAllIssues,
  getIssue,
  updateIssue,
  deleteIssue,
};
