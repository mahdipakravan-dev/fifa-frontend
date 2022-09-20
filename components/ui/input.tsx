import {AllHTMLAttributes} from "react";
import clsx from "clsx";
import {UseFormRegister} from "react-hook-form";

type Props = {
    register : ReturnType<UseFormRegister<any>>
} & AllHTMLAttributes<HTMLInputElement>;
export const Input = (props: Props) => {
    return (
        <input {...props} {...props.register} className={clsx("form-input px-4 py-2 rounded w-full bg-background border-none" , props.className)}/>
    );
};
