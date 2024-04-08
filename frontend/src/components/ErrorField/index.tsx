import { XCircleIcon } from "@heroicons/react/20/solid";

export default function ErrorField({
  mainError,
  subErrors,
}: {
  mainError: string;
  subErrors?: string[];
}) {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="shrink-0">
          <XCircleIcon
            className="h-5 w-5 text-red-secondary"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3 min-w-0 break-words">
          <h3 className="text-sm font-medium text-red-primary">{mainError}</h3>
          {subErrors && (
            <div className="mt-2 text-sm text-red-primary">
              <ul role="list" className="list-disc space-y-1 pl-5">
                {subErrors.map((error) => {
                  return <li key={error}>{error}</li>;
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
