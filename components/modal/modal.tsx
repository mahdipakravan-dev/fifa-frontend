import styles from "./modal.module.css"
import React, {EventHandler, FC, MouseEventHandler, PropsWithChildren, useState} from "react";
import {useDelayUnmount} from "../../libs/hooks";

const mountedStyle = {opacity: 1, transition: "opacity 500ms ease-in"};
const unmountedStyle = {opacity: 0, transition: "opacity 500ms ease-in"};
const unmountedStyle2 = {transform : "translateY(100px)" , transition: "all 1000ms ease-in"};

type Props = {
    onBackClick : any
    title ?: string
    desc ?: string
} & PropsWithChildren;
export const Modal : FC<Props> = (props) => {
    console.log("AD" , props)
    const [mount , setMount] = useState(true)
    const shouldRenderChild = useDelayUnmount({
        delayTime : 1000,
        isMounted : mount,
        afterEnd : props.onBackClick
    })

    const toggleMount = (e : React.MouseEvent<HTMLElement>) => {
        if(e.target !== e.currentTarget) return;
        setMount(prev => !prev);
    }

    return (
        <>
            {shouldRenderChild && (
                <div onClick={toggleMount} className={styles.modal_wrapper} style={mount ? mountedStyle : unmountedStyle}>
                    <div className={styles.modal}>
                        {/*<span className={styles.title}>Login into account</span>*/}
                        <div className={"px-4"} style={mount ? {} : unmountedStyle2}>
                            {props.desc || props.title && (
                                <div className={"mb-10"}>
                                    {props.title && <h1 className={"text-3xl"}>{props.title}</h1>}
                                    {props.desc && <p className={"text-slate-600 mt-1"}>{props.desc}</p>}
                                </div>
                            )}
                            <div>{props.children}</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
