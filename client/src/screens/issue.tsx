import moment from "moment";
import { RootState, useAppSelector } from "../store/store";
import { Badge, Dropdown } from "../components";
import { useState } from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

export const Issue = () => {
  const { selectedIssue } = useAppSelector(
    (state: RootState) => state.store.issues
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
          </span>

          <span>
            <p>{selectedIssue?.description}</p>
          </span>
        </div>
      </div>
      <div className="bg-white rounded-lg p-5 flex xl:flex-col items-center justify-center gap-2">
        <Dropdown
          isOpen={isOpen}
          triggerLabel="Suggestions"
          toggleDropdown={toggleDropdown}
        />
        <button className="bg-blue-400 py-1 px-2 rounded-md flex items-center gap-1 w-32 justify-center">
          <RiEdit2Fill />
          Edit Issue
        </button>
        <button className="bg-red-400 py-1 px-2 rounded-md flex items-center gap-1 w-32 justify-center">
          <MdDelete />
          Delete Issue
        </button>
      </div>
    </div>
  );
};
