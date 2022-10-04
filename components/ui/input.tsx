import { AllHTMLAttributes } from "react";
import clsx from "clsx";
import { omit } from "lodash";
import { UseFormRegister } from "react-hook-form";

type Props = {
  register: ReturnType<UseFormRegister<any>>;
  error?: string;
} & AllHTMLAttributes<HTMLInputElement>;
export const Input = (props: Props) => {
  return (
    <>
      <input
        {...omit(props, "register", "error")}
        {...props.register}
        className={clsx(
          "form-input px-4 py-2 rounded w-full bg-background border-none",
          props.error && "border border-solid border-red-200",
          props.className
        )}
      />
      {props.error && (
        <span className={"text-xs text-red-600 pt-2"}>{props.error}</span>
      )}
    </>
  );
};
