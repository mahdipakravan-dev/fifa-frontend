import {AllHTMLAttributes, HTMLAttributes, PropsWithChildren} from "react";
import clsx from "clsx";

type Props = {
    loading ?: boolean
} & AllHTMLAttributes<HTMLButtonElement>
export const Button = (props: PropsWithChildren<Props>) => {
    return (
        <button
            {...props as HTMLAttributes<HTMLButtonElement>}
            disabled={props.loading || props.disabled}
            className={clsx(
                "bg-blue-800 p-2 mr-2 w-full rounded flex justify-center items-center" ,
                props.loading && "bg-blue-900 opacity-10" ,
                props.className
            )}>
                <div className={"py-2"}>{props.loading ? <div className="animate-spin mr-3 border-2 h-4 w-4 rounded-full p-2">-</div> : props.children}</div>
        </button>
    );
};
