import { useNavigate } from "react-router-dom";
import { MdTask } from "react-icons/md";
import { ISSUES } from "../routes";
import { IIssue } from "../models";
import moment from "moment";
import { RootState, useAppSelector } from "../store/store";
import { Spinner } from ".";

export const RecentTickets = () => {
  const navigate = useNavigate();

  const { issues, isGetIssuesLoading } = useAppSelector(
    (state: RootState) => state.issues
  );

  const redirectToIssues = () => navigate(ISSUES);

  return (
    <div className="w-full col-span-1 lg:h-[84vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-y-scroll">
      <h1
        className="font-medium hover:bg-gray-100 w-fit px-4 py-1 rounded-lg cursor-pointer"
        onClick={redirectToIssues}
      >
        Recent Tickets
      </h1>

      {isGetIssuesLoading ? (
        <div className="flex items-center justify-center h-full">
          <Spinner />
        </div>
      ) : (
        <ul className="relative">
          {issues.map((issue: IIssue, id) => (
            <li
              key={id}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
            >
              <div className="bg-blue-100 rounded-lg p-3">
                <MdTask className="text-blue-500" size={20} />
              </div>
              <div className="ml-4">
                <p className="text-gray-800 font-bold">{issue.title}</p>
              </div>
              <p className="lg:flex md:hidden absolute right-12 text-sm font-medium">
                {moment(issue.updatedAt).fromNow()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
