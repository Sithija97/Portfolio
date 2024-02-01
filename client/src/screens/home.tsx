import { BarChart, SummaryCard } from "../components";
import { RecentTickets } from "../components/recent.tickets";
import { IssueTypes } from "../enums";
import { RootState, useAppSelector } from "../store/store";
import { countByStatus, percentageByStatus } from "../utils";

export const Home = () => {
  const { issues } = useAppSelector((state: RootState) => state.store.issues);

  const openIssueCount = countByStatus(issues, IssueTypes.OPEN);
  const inProgressCount = countByStatus(issues, IssueTypes.INPROGRESS);
  const resolvedCount = countByStatus(issues, IssueTypes.RESOLVED);

  const openIssuePercentage = percentageByStatus(issues, IssueTypes.OPEN);
  const inProgressPercentage = percentageByStatus(
    issues,
    IssueTypes.INPROGRESS
  );
  const resolvedPercentage = percentageByStatus(issues, IssueTypes.RESOLVED);

  return (
    <div className="grid xl:grid-cols-2 p-5 h-full overflow-y-auto">
      <div className="w-full h-full">
        <div className="grid lg:grid-cols-3 gap-3 p-2">
          <SummaryCard
            title="Open"
            count={openIssueCount}
            percanatge={openIssuePercentage}
          />
          <SummaryCard
            title="In-Progress"
            count={inProgressCount}
            percanatge={inProgressPercentage}
          />
          <SummaryCard
            title="Resolved"
            count={resolvedCount}
            percanatge={resolvedPercentage}
          />
        </div>
        <div className="p-2">
          <BarChart />
        </div>
      </div>
      <div className="w-full h-full p-2">
        <RecentTickets />
      </div>
    </div>
  );
};
