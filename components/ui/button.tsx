import { AllHTMLAttributes, HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";
import { TAILWIND_CONFIG } from "../../constants/colors";
import { omit } from "lodash";

type Props = {
  loading?: boolean;
  variants?: "contained" | "transparent" | "rounded";
} & AllHTMLAttributes<HTMLButtonElement>;

export const Button = (props: PropsWithChildren<Props>) => {
  const { variants = "transparent" } = props;
  return (
    <button
      {...(omit(
        props,
        "variants",
        "loading"
      ) as HTMLAttributes<HTMLButtonElement>)}
      disabled={props.loading || props.disabled}
      className={clsx(
        "w-full rounded flex justify-center items-center",
        variants === "transparent" && "bg-transparent",
        variants === "contained" && "bg-primary",
        variants === "rounded" && "border border-solid border-primary",
        props.loading && "bg-blue-900 opacity-10",
        props.className
      )}
    >
      <div className={"py-2"}>
        {props.loading ? (
          <div className="animate-spin mr-3 border-2 h-4 w-4 rounded-full p-2">
            -
          </div>
        ) : (
          props.children
        )}
      </div>
    </button>
  );
};
