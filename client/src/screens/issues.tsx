import { MdTask } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ADD_ISSUE, ISSUE } from "../routes";
import { IIssue } from "../models";
import { RootState, useAppSelector } from "../store/store";
import { Spinner } from "../components";
import moment from "moment";
import { FaPenToSquare } from "react-icons/fa6";

export type DataElement = {
  id: number;
  name: {
    first: string;
    last: string;
  };
  total: number;
  status: string;
  method: string;
  date: string;
};
export const Issues = () => {
  const navigate = useNavigate();

  const { issues, isGetIssuesLoading } = useAppSelector(
    (state: RootState) => state.issues
  );

  const redirectToAddIssue = () => {
    navigate(ADD_ISSUE);
  };

  const redirectToIssueDetails = (issueId: string) => {
    const issueDetailsRoute = `${ISSUE.replace("/:id", "")}/${issueId}`;
    navigate(issueDetailsRoute);
  };

  return (
    <div className="w-full h-full p-5">
      <div className="flex items-center justify-between pb-4">
        <h2 className="font-semibold">Issues</h2>
        <button
          className="flex items-center gap-2 bg-purple-400 py-1 px-2 rounded-lg "
          onClick={redirectToAddIssue}
        >
          <FaPenToSquare /> Create Issue
        </button>
      </div>
      <div className="w-full m-auto p-4 mb-4 border rounded-lg bg-white h-[80%]  xl:h-[84%] overflow-y-auto">
        <div className="my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
          <span className="font-medium">Ticket Name</span>
          <span className="sm:text-center text-right font-medium">Status</span>
          <span className="hidden sm:grid font-medium">Last Updated</span>
          <span className="hidden sm:grid font-medium">Reporter</span>
          <span className="hidden md:grid font-medium">Assignee</span>
        </div>
        {isGetIssuesLoading ? (
          <div className="flex items-center justify-center h-full">
            <Spinner />
          </div>
        ) : (
          <ul>
            {issues.map((issue: IIssue, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg  my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div
                  className="flex items-center"
                  onClick={() => redirectToIssueDetails(issue._id)}
                >
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MdTask className="text-purple-500" size={20} />
                  </div>
                  <div className="pl-4">
                    <p className="text-gray-800 font-bold">{issue.title}</p>
                  </div>
                </div>

                <p className="text-gray-600 sm:text-center text-right text-xs">
                  <span
                    className={
                      issue.status == "Completed"
                        ? "bg-green-200 py-1 px-2 rounded-lg font-bold"
                        : issue.status == "Open"
                        ? "bg-blue-200 py-1 px-2 rounded-lg font-bold"
                        : "bg-yellow-200 py-1 px-2 rounded-lg font-bold"
                    }
                  >
                    {issue.status}
                  </span>
                </p>
                <p className="hidden md:flex font-medium">
                  {moment(issue.updatedAt).fromNow()}
                </p>
                <p className="hidden md:flex font-medium">
                  {issue.reporter?.username}
                </p>
                <div className="sm:flex hidden justify-between items-center font-medium">
                  <p>{issue.assignee ? issue.assignee : "Unassigned"}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
