import ExclamationCircleIcon from "@heroicons/react/24/outline/ExclamationCircleIcon";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegisterReturn,
} from "react-hook-form";
import { classNames } from "@/utils/tailwind";
export enum InputType {
  EMAIL = "email",
  PASSWORD = "password",
}

//DEPRECATED - use InputV2 instead
type InputProps<FormValues extends FieldValues> = {
  type: InputType;
  required: boolean;
  label: Path<FormValues>;
  register: UseFormRegisterReturn<Path<FormValues>>;
  errors: FieldErrors<FormValues>;
  disabled?: boolean;
};

function Input<FormValues extends FieldValues>({
  type,
  label,
  register,
  errors,
  disabled,
}: InputProps<FormValues>) {
  return (
    <div>
      <label className="block text-sm font-medium  text-primary">{label}</label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          key={label}
          type={type}
          placeholder={type === InputType.EMAIL ? "sarah@company.com" : ""}
          autoComplete={type === InputType.EMAIL ? "email" : "current-password"}
          aria-invalid={errors[label] ? "true" : "false"}
          disabled={disabled}
          {...register}
          className={classNames(
            disabled ? "opacity-60 cursor-not-allowed" : "",
            "block w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-secondary focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "
          )}
        />
        {errors[label] && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-secondary"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {errors[label] && (
        <p className="mt-2 text-sm text-red-primary">
          {errors[label]?.message as string}
        </p>
      )}
    </div>
  );
}

export default Input;
