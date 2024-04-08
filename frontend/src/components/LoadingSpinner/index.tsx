type SpinnerSize = "small" | "medium" | "large";

export default function LoadingSpinner({
  size = "medium",
  className = "",
}: {
  size?: SpinnerSize;
  className?: string;
}) {
  const spinnerSize = {
    small: "h-6 w-6",
    medium: "h-12 w-12",
    large: "h-20 w-20",
  };
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${spinnerSize[size]} inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-theme-primary motion-reduce:animate-[spin_1.5s_linear_infinite]`}
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
}
