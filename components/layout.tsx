import {AllHTMLAttributes, PropsWithChildren} from "react";
import {clsx} from "clsx"

type Props = {

} & PropsWithChildren & AllHTMLAttributes<HTMLDivElement>;
export const Layout = (props: Props) => {
    return (
        <div className={clsx(
            "container mx-auto px-12 py-4 min-h-screen max-w-20",
            props.className
        )} {...props}>
            {props.children}
        </div>
    );
};
