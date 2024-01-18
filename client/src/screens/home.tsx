import { BarChart, SummaryCard } from "../components";
import { RecentTickets } from "../components/recent.tickets";

export const Home = () => {
  return (
    <div className="grid xl:grid-cols-2 p-5 h-full overflow-y-auto">
      <div className="w-full h-full">
        <div className="grid lg:grid-cols-3 gap-3 p-2">
          <SummaryCard title="Open" count={160} />
          <SummaryCard title="In-Progress" count={80} />
          <SummaryCard title="Resolved" count={60} />
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
