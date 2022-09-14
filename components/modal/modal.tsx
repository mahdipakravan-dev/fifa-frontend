import styles from "./modal.module.css"
import {Input} from "../ui/input";
import {Button} from "../ui/button"
import {FC, PropsWithChildren} from "react";

const mountedStyle = {opacity: 1, transition: "opacity 500ms ease-in"};
const unmountedStyle = {opacity: 0, transition: "opacity 500ms ease-in"};
const unmountedStyle2 = {transform : "translateY(100px)" , transition: "all 1000ms ease-in"};

type Props = {
    onBackClick : any
    show : boolean
} & PropsWithChildren;
export const Modal : FC<Props> = (props) => {
    console.log("PROPS" , props)
    return (
        <div onClick={props.onBackClick} className={styles.modal_wrapper} style={props.show ? mountedStyle : unmountedStyle}>
            <div className={styles.modal}>
                {/*<span className={styles.title}>Login into account</span>*/}
                <div className={"px-4"} style={props.show ? {} : unmountedStyle2}>
                    <div className={"mb-10"}>
                        <h1 className={"text-3xl"}>Login Page</h1>
                        <p className={"text-slate-600 mt-1"}>login page is so nice</p>
                    </div>
                    <div>{props.children}</div>
                </div>
            </div>
        </div>
    );
};
