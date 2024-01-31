import { FC } from "react";

type IProps = {
  status: string | undefined;
};

export const Badge: FC<IProps> = ({ status = "Open" }) => {
  return (
    <span
      className={
        status == "Completed"
          ? "bg-green-200 py-1 px-2 rounded-lg font-bold"
          : status == "Open"
          ? "bg-blue-200 py-1 px-2 rounded-lg font-bold"
          : "bg-yellow-200 py-1 px-2 rounded-lg font-bold"
      }
    >
      {status}
    </span>
  );
};
