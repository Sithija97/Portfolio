import { useNavigate } from "react-router-dom";
import { ISSUES } from "../routes";
import { IIssue } from "../models";
import { RootState, useAppSelector } from "../store/store";
import { Badge, Spinner } from ".";

export const RecentTickets = () => {
  const navigate = useNavigate();

  const { issues, isGetIssuesLoading } = useAppSelector(
    (state: RootState) => state.store.issues
  );

  const redirectToIssues = () => navigate(ISSUES);

  return (
    <div className="w-full col-span-1 lg:h-[84vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-y-scroll">
      <h1
        className="font-medium hover:bg-gray-100 w-fit px-4 py-1 mb-2 rounded-lg cursor-pointer"
        onClick={redirectToIssues}
      >
        Recent Tickets
      </h1>

      {/* {isGetIssuesLoading ? (
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
                <p className="text-gray-800 lighter">{issue.title}</p>
              </div>
              <p className="lg:flex md:hidden absolute right-12 text-sm lighter">
                {moment(issue.updatedAt).fromNow()}
              </p>
            </li>
          ))}
        </ul>
      )} */}
      {isGetIssuesLoading ? (
        <div className="flex items-center justify-center h-full">
          <Spinner />
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200 overflow-x-auto border border-t-1 rounded-lg">
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
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {issues.map((issue: IIssue, id) => (
              <tr key={id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="flex items-center">
                    <span className="ml-4">
                      <span className="text-sm font-medium text-gray-900">
                        {issue.title}
                      </span>
                    </span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge status={issue.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
