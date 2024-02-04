import { FC } from "react";

type IProps = {
  title?: string;
  status: string | undefined;
  onClick?: () => void;
};

export const Badge: FC<IProps> = ({ title, status = "Open", onClick }) => {
  const generateColorCodes = (status: string): string => {
    switch (status) {
      case "Open":
        return "bg-blue-100 text-blue-800";

      case "In Progress":
        return "bg-yellow-100 text-yellow-800";

      case "Resolved":
        return "bg-green-100 text-green-800";

      case "Closed":
        return "bg-pink-100 text-pink-800";

      case "delete":
        return "cursor-pointer bg-pink-100 text-pink-800";

      case "edit":
        return "cursor-pointer bg-blue-100 text-blue-800";

      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return (
    <span
      className={
        `px-2 inline-flex text-xs leading-5 font-semibold rounded-full ` +
        generateColorCodes(status)
      }
      onClick={onClick}
    >
      {title ? title : status}
    </span>
  );
};
