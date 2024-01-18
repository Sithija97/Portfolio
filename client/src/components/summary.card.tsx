import { FC } from "react";

type IProps = {
  count: number;
  title: string;
};

export const SummaryCard: FC<IProps> = ({ count, title }) => {
  return (
    <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
      <div className="flex flex-col w-full pb-4">
        <p className="text-2xl font-bold">{count}</p>
        <p className="text-gray-600 font-medium">{title}</p>
      </div>
      <p className="bg-blue-100 flex justify-center items-center p-2 rounded-lg">
        <span className="text-blue-500 text-lg font-bold">+18%</span>
      </p>
    </div>
  );
};
