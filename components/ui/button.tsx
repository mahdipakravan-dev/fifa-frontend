import {AllHTMLAttributes, HTMLAttributes, PropsWithChildren} from "react";
import clsx from "clsx";

type Props = {

} & AllHTMLAttributes<HTMLButtonElement>
export const Button = (props: PropsWithChildren<Props>) => {
    return (
        <button {...props as HTMLAttributes<HTMLButtonElement>} className={clsx("bg-blue-800 p-2 mr-2 w-full rounded" , props.className)}>{props.children}</button>
    );
};
