import { FC, useState } from "react";

type IProps = {
  isOpen: boolean;
  triggerLabel: string;
  initialValue: string | undefined;
  options: string[];
  toggleDropdown: () => void;
  onChange: (selectedOption: string) => void;
};

export const Dropdown: FC<IProps> = ({
  isOpen,
  triggerLabel,
  initialValue,
  options,
  toggleDropdown,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    initialValue
  );

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onChange(option);
    toggleDropdown();
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-b-gray-300 rounded-md hover:bg-slate-100 focus:outline-none"
      >
        {selectedOption ? selectedOption : triggerLabel}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12l-8-8 1.5-1.5L10 9l6.5-6.5L18 4l-8 8z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option, id) => (
              <span
                key={id}
                onClick={() => handleOptionClick(option)}
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${
                  selectedOption === option ? "bg-gray-100" : ""
                }`}
              >
                {option}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
