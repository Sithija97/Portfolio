import { MdTask } from "react-icons/md";
import { data } from "../data";
import { BsThreeDotsVertical } from "react-icons/bs";

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
  return (
    <div className="w-full h-full p-5">
      <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
        <div className="my-3 p-2 grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3 items-center justify-between cursor-pointer">
          <span className="font-medium">Ticket Name</span>
          <span className="sm:text-left text-right font-medium">Status</span>
          <span className="hidden md:grid font-medium">Last Updated</span>
          <span className="font-medium">Reporter</span>
          <span className="font-medium">Assignee</span>
        </div>
        <ul>
          {data.map((order: DataElement, id) => (
            <li
              key={id}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3 items-center justify-between cursor-pointer"
            >
              <div className="flex">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <MdTask className="text-purple-500" size={20} />
                </div>
                <div className="pl-4">
                  <p className="text-gray-800 font-bold">
                    ${order.total.toLocaleString()}
                  </p>
                  <p className="text-gray-800 text-sm">{order.name.first}</p>
                </div>
              </div>

              <p className="text-gray-600 sm:text-left text-right text-xs">
                <span
                  className={
                    order.status == "Processing"
                      ? "bg-green-200 py-1 px-2 rounded-lg font-bold"
                      : order.status == "Completed"
                      ? "bg-blue-200 py-1 px-2 rounded-lg font-bold"
                      : "bg-red-200 py-1 px-2 rounded-lg font-bold"
                  }
                >
                  {order.status}
                </span>
              </p>
              <p className="hidden md:flex font-medium">{order.date}</p>
              <p className="hidden md:flex font-medium">QA user</p>
              <div className="sm:flex hidden justify-between items-center font-medium">
                <p>{order.method}</p>
                <BsThreeDotsVertical />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
