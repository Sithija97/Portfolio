import { useNavigate } from "react-router-dom";
import { ADD_ISSUE, ISSUE } from "../routes";
import { IIssue } from "../models";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { Badge, Spinner } from "../components";
import moment from "moment";
import { FaPenToSquare } from "react-icons/fa6";
import { setSelectedReducer } from "../store/issues/issueSlice";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useState } from "react";

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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { issues, isGetIssuesLoading } = useAppSelector(
    (state: RootState) => state.store.issues
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [issuesPerPage] = useState(7);

  const totalPages = Math.ceil(issues.length / issuesPerPage);

  const slicedIssues = issues.slice(
    (currentPage - 1) * issuesPerPage,
    currentPage * issuesPerPage
  );

  const redirectToAddIssue = () => {
    navigate(ADD_ISSUE);
  };

  const redirectToIssueDetails = (issue: IIssue) => {
    const issueDetailsRoute = `${ISSUE.replace("/:id", "")}/${issue._id}`;
    dispatch(setSelectedReducer(issue));
    navigate(issueDetailsRoute);
  };

  return (
    <div className="w-full h-full p-5 ">
      <div className="flex items-center justify-between pb-4">
        <h2 className="font-semibold">Issues</h2>
        <button
          className="flex items-center gap-2 bg-blue-100 py-1 px-2 text-blue-800 rounded-sm"
          onClick={redirectToAddIssue}
        >
          <FaPenToSquare /> Create Issue
        </button>
      </div>

      {isGetIssuesLoading ? (
        <div className="flex items-center justify-center h-full">
          <Spinner />
        </div>
      ) : (
        <>
          <table className="min-w-full divide-y divide-gray-200 overflow-x-auto border border-t-1">
            <thead className="bg-gray-50 rounded-t-lg">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                >
                  Ticket Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                >
                  Last Updated
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                >
                  Reporter
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                >
                  Assignee
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {slicedIssues.map((issue: IIssue, id) => (
                <tr key={id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="flex items-center">
                      {/* <span className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://i.pravatar.cc/150?img=1"
                    alt=""
                  />
                </span> */}
                      <span
                        className="ml-4 cursor-pointer"
                        onClick={() => redirectToIssueDetails(issue)}
                      >
                        <span className="text-sm font-medium text-gray-900">
                          {issue.title}
                        </span>
                        {/* <span className="text-sm text-gray-500">
                        jane.cooper@example.com
                      </span> */}
                      </span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge status={issue.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {moment(issue.updatedAt).fromNow()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {issue.reporter?.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {issue.assignee ? issue.assignee?.username : "Unassigned"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {/* <span className="text-blue-400 hover:text-blue-600">
                    <RiEdit2Fill size={20} />
                  </span>
                  <span className="ml-2 text-red-400 hover:text-red-600">
                    <MdDelete size={20} />
                  </span> */}
                    <HiOutlineDotsVertical />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-4 px-10">
            <button
              className="flex items-center gap-2 px-2 py-1 rounded-sm bg-gray-200 hover:bg-gray-300 text-gray-600 font-medium text-sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>

            {[...Array(Math.min(5, totalPages)).keys()].map((pageNumber) => (
              <button
                key={pageNumber + 1}
                className={`flex items-center gap-2 px-2 py-1 rounded-sm ${
                  currentPage === pageNumber + 1
                    ? "bg-gray-300 text-gray-700 hover:bg-gray-400"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-600"
                } font-medium text-sm`}
                onClick={() => setCurrentPage(pageNumber + 1)}
              >
                {pageNumber + 1}
              </button>
            ))}

            <button
              className="flex items-center gap-2 px-2 py-1 rounded-sm bg-gray-200 hover:bg-gray-300 text-gray-600 font-medium text-sm"
              disabled={slicedIssues.length < issuesPerPage}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};
