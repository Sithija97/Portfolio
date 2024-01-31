import moment from "moment";
import { RootState, useAppSelector } from "../store/store";
import { Badge } from "../components";

export const Issue = () => {
  const { selectedIssue } = useAppSelector((state: RootState) => state.issues);

  return (
    <div className="grid grid-cols-4 gap-4 py-10 px-5">
      <div className="col-span-3 bg-white rounded-lg">
        <div className="p-5">
          <h3>{selectedIssue?.title}</h3>
          <p className="text-gray-600 text-left text-xs">
            <Badge status={selectedIssue?.status} />
          </p>
          <p>{moment(selectedIssue?.updatedAt).format("ddd MMM DD YYYY")}</p>
          <p>{selectedIssue?.description}</p>
        </div>
      </div>
      <div className=" bg-white rounded-lg">2</div>
    </div>
  );
};
