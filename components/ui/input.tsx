import {AllHTMLAttributes} from "react";
import clsx from "clsx";

type Props = {

} & AllHTMLAttributes<HTMLInputElement>;
export const Input = (props: Props) => {
    return (
        <input {...props} className={clsx("form-input px-4 py-2 rounded w-full bg-background border-none" , props.className)}/>
    );
};
