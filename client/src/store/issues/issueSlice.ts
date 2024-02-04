/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addIssueInputs,
  initialIssueState,
  updateIssueParams,
} from "../../models";
import IssueService from "../../services/issues";

const initialState: initialIssueState = {
  issues: [],
  issuesByUser: [],
  isGetIssuesError: false,
  isGetIssuesByUserError: false,
  isGetIssuesSuccess: false,
  isGetIssuesByUserSuccess: false,
  isGetIssuesLoading: false,
  isGetIssuesByUserLoading: false,
  message: "",
  selectedIssue: null,
};

export const addIssue = createAsyncThunk(
  "issues/addIssue",
  async (payload: addIssueInputs, thunkAPI) => {
    try {
      const response = await IssueService.addIssue(payload);
      return response.data;
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

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

export const updateIssue = createAsyncThunk(
  "issues/updateIssue",
  async (payload: updateIssueParams, thunkAPI) => {
    try {
      const response = await IssueService.updateIssue(payload);
      return response.data;
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteIssue = createAsyncThunk(
  "issues/deleteIssue",
  async (issueId: string, thunkAPI) => {
    try {
      const response = await IssueService.deleteIssue(issueId);
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
  reducers: {
    setSelectedReducer: (state, { payload }) => {
      state.selectedIssue = payload;
    },
    setStatus: (state, { payload }) => {
      if (state.selectedIssue) {
        state.selectedIssue.status = payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIssues.pending, (state) => {
        state.isGetIssuesLoading = true;
      })
      .addCase(getIssues.fulfilled, (state, { payload }) => {
        state.isGetIssuesLoading = false;
        state.isGetIssuesSuccess = true;
        state.issues = payload;
      })
      .addCase(getIssues.rejected, (state, { payload }) => {
        state.isGetIssuesLoading = false;
        state.isGetIssuesError = true;
        state.message = payload as string;
      })
      .addCase(getIssuesByUser.pending, (state) => {
        state.isGetIssuesByUserLoading = true;
      })
      .addCase(getIssuesByUser.fulfilled, (state, { payload }) => {
        state.isGetIssuesByUserLoading = false;
        state.isGetIssuesByUserSuccess = true;
        state.issuesByUser = payload;
      })
      .addCase(getIssuesByUser.rejected, (state, { payload }) => {
        state.isGetIssuesByUserLoading = false;
        state.isGetIssuesByUserError = true;
        state.message = payload as string;
      });
  },
});

export const { setSelectedReducer, setStatus } = issuesSlice.actions;

export default issuesSlice.reducer;
