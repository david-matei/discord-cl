import { classNames } from "@/utils/tailwind";

type ButtonType = "button" | "submit";

const BUTTON_KIND = {
  primary:
    "bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 text-white",
  secondary:
    "bg-white hover:bg-gray-50 ring-1 ring-inset ring-gray-300 text-primary",
  danger:
    "bg-red-600 hover:bg-red-500 focus-visible:outline-red-600 text-white",
};

const sizes = {
  small: "py-0 px-2",
  medium: "py-1 px-2",
  large: "py-2 px-3",
};

type ButtonProps = {
  text?: string;
  type?: ButtonType;
  kind?: keyof typeof BUTTON_KIND;
  className?: string;
  isDisabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  size?: keyof typeof sizes;
};
export const Button = ({
  text,
  type = "button",
  kind = "primary",
  children,
  className = "",
  size = "medium",
  isDisabled = false,
  onClick = () => {},
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={(e) => (isDisabled ? e.preventDefault() : onClick())}
      className={classNames(
        BUTTON_KIND[kind],
        "w-fit h-fit justify-center rounded-md text-sm font-semibold shadow-sm",
        className,
        isDisabled ? "cursor-not-allowed opacity-50" : "",
        sizes[size]
      )}
    >
      {children || text}
    </button>
  );
};
