/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialIssueState } from "../../models";
import IssueService from "../../services/issues";

const initialState: initialIssueState = {
  issues: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getIssues = createAsyncThunk(
  "issues/getIsses",
  async (_, thunkAPI) => {
    try {
      const response = await IssueService.getIssues();
      return response.data;
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getIssuesByUser = createAsyncThunk(
  "issues/getIssesByUser",
  async (_, thunkAPI) => {
    try {
      const response = await IssueService.getIssues();
      return response.data;
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const issuesSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {},
  //   extraReducers: (builder) => {},
});

// export const {} = issuesSlice.actions;

export default issuesSlice.reducer;
