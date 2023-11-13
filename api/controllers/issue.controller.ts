import { Response } from "express";
import asyncHandler from "express-async-handler";
import { CustomRequest } from "../interfaces/index.js";
import { Issue } from "../models/issue.model.js";

const createIssue = asyncHandler(async (req: CustomRequest, res: Response) => {
  const { title, description } = req.body;

  if (!title) {
    res.status(400);
    throw new Error("Please fill the title");
  }

  const issue = await Issue.create({
    user: req.user._id,
    title,
    description,
  });

  res.status(201).json(issue);
});

const getIssues = asyncHandler(async (req: CustomRequest, res: Response) => {
  const issues = await Issue.find({ user: req.user._id }).sort("-createdAt");
  res.status(200).json(issues);
});

const getIssue = asyncHandler(async (req: CustomRequest, res: Response) => {
  const issue = await Issue.findById(req.params.id);

  if (!issue) {
    res.status(404);
    throw new Error("Issue not found");
  }

  if (issue.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("User is not authorized");
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

  if (issue.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("User is not authorized");
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

  if (issue.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("User is not authorized");
  }

  await issue.deleteOne();
  res.status(200).json(issue);
});

export { createIssue, getIssues, getIssue, updateIssue, deleteIssue };
