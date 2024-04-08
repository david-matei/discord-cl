const AuthFormHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="flex items-start flex-col sm:w-full sm:max-w-md gap-y-5 ">
      <div className="flex flex-row justify-between items-center w-full flex-wrap">
        <h2 className="text-2xl font-bold  tracking-tight text-primary">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="font-bold tracking-tight text-secondary">{subtitle}</p>
      )}
    </div>
  );
};

export default AuthFormHeader;
