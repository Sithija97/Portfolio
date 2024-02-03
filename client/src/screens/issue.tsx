import moment from "moment";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { Badge, Dropdown } from "../components";
import { useState } from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ResponseStatus } from "../enums";
import { getIssues, deleteIssue } from "../store/issues/issueSlice";
import { EDIT_ISSUE, HOME } from "../routes";

export const Issue = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { selectedIssue } = useAppSelector(
    (state: RootState) => state.store.issues
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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

  return (
    <div className="grid xl:grid-cols-4 gap-4 py-10 px-24">
      <div className="xl:col-span-3 bg-white rounded-lg">
        <div className="p-5">
          <h3 className="text-xl font-medium pb-3">{selectedIssue?.title}</h3>

          <span className="flex items-center pb-5">
            <p className="text-gray-600 text-left text-xs pr-2">
              <Badge status={selectedIssue?.status} />
            </p>
            <p>{moment(selectedIssue?.updatedAt).format("ddd MMM DD YYYY")}</p>
            <p className="flex text-gray-400 pl-3 gap-2">
              <i>reported by :</i> <p>{selectedIssue?.reporter.username}</p>
            </p>
          </span>

          <span>
            <p>{selectedIssue?.description}</p>
          </span>
        </div>
      </div>
      <div className="bg-white rounded-lg p-5 flex xl:flex-col items-center justify-center gap-2">
        <Dropdown
          isOpen={isOpen}
          triggerLabel="Update Status"
          toggleDropdown={toggleDropdown}
        />
        <button
          className="bg-blue-200 py-1 px-2 rounded-md flex items-center gap-1 w-32 justify-center"
          onClick={redirectToEditIssue}
        >
          <RiEdit2Fill />
          Edit Issue
        </button>
        <button
          className="bg-red-400 py-1 px-2 rounded-md flex items-center gap-1 w-32 justify-center"
          onClick={deleteIssueFunc}
        >
          <MdDelete />
          Delete Issue
        </button>
      </div>
    </div>
  );
};
