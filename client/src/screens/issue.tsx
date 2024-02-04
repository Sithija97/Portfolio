import moment from "moment";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { Badge, Dropdown } from "../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ResponseStatus } from "../enums";
import {
  getIssues,
  deleteIssue,
  updateIssue,
  setStatus,
} from "../store/issues/issueSlice";
import { EDIT_ISSUE, HOME } from "../routes";
import { optionsArray as options } from "../data";
import { IOption } from "../models";

export const Issue = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { selectedIssue } = useAppSelector(
    (state: RootState) => state.store.issues
  );
  const { registeredUsers, user } = useAppSelector(
    (state: RootState) => state.store.auth
  );

  const [isOpenStatus, setIsOpenStatus] = useState<boolean>(false);
  const [isOpenAssignee, setIsOpenAssignee] = useState<boolean>(false);

  const toggleStatusDropdown = () => {
    setIsOpenStatus(!isOpenStatus);
  };

  const toggleAssigneeDropdown = () => {
    setIsOpenAssignee(!isOpenAssignee);
  };

  const deleteIssueFunc = async () => {
    const response =
      selectedIssue && (await dispatch(deleteIssue(selectedIssue?._id)));
    if (response?.meta.requestStatus === ResponseStatus.FULFILLED) {
      navigate(HOME);
      dispatch(getIssues());
    } else {
      alert("Error Occured: Delete Issue");
    }
  };

  const redirectToEditIssue = () => {
    const issueDetailsRoute = `${EDIT_ISSUE.replace("/:id", "")}/${
      selectedIssue?._id
    }`;
    navigate(issueDetailsRoute);
  };

  const handleStatusChange = async (option: IOption) => {
    dispatch(setStatus(option?.name));
    const response =
      selectedIssue &&
      (await dispatch(
        updateIssue({ issueId: selectedIssue?._id, status: option?.name })
      ));
    if (response?.meta.requestStatus === ResponseStatus.FULFILLED) {
      dispatch(getIssues());
    }
  };

  const handleAssigneeChange = async (option: IOption) => {
    const response =
      selectedIssue &&
      (await dispatch(
        updateIssue({ issueId: selectedIssue?._id, assignee: option?.id })
      ));
    if (response?.meta.requestStatus === ResponseStatus.FULFILLED) {
      dispatch(getIssues());
    }
  };

  const initialValue = options.find(
    (option) => option.name === selectedIssue?.status
  );
  const initialUserValue = options.find((option) => option.id === user?._id);

  return (
    <div className="grid xl:grid-cols-4 gap-4 py-10 px-24">
      <div className="xl:col-span-3 bg-white rounded-lg">
        <div className="p-5">
          <span className="flex items-center justify-between">
            <h3 className="text-xl font-medium pb-3">{selectedIssue?.title}</h3>
            <span className="flex items-center gap-1">
              <Badge status="edit" title="Edit" onClick={redirectToEditIssue} />
              <Badge status="delete" title="Delete" onClick={deleteIssueFunc} />
            </span>
          </span>

          <span className="flex items-center pb-5">
            <p className="text-gray-600 text-left text-xs pr-2">
              <Badge status={selectedIssue?.status} />
            </p>
            <p>{moment(selectedIssue?.updatedAt).format("ddd MMM DD YYYY")}</p>
            <p className="flex text-gray-400 pl-3 gap-2">
              <i>reported by :</i>
              <span>{selectedIssue?.reporter.username}</span>
            </p>
          </span>

          <span>
            <p>{selectedIssue?.description}</p>
          </span>
        </div>
      </div>
      <div className="bg-white rounded-lg p-5 flex  items-center justify-center gap-2">
        <Dropdown
          isOpen={isOpenStatus}
          options={options}
          triggerLabel="Status"
          initialValue={initialValue}
          toggleDropdown={toggleStatusDropdown}
          onChange={handleStatusChange}
        />
        <Dropdown
          isOpen={isOpenAssignee}
          options={registeredUsers}
          triggerLabel="Assignee"
          initialValue={initialUserValue}
          toggleDropdown={toggleAssigneeDropdown}
          onChange={handleAssigneeChange}
        />
      </div>
    </div>
  );
};
