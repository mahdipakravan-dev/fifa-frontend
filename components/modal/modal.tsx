import styles from "./modal.module.css"
import {Input} from "../ui/input";
import {Button} from "../ui/button"

type Props = {
    onBackClick : any
};
export const Modal = (props: Props) => {
    return (
        <div onClick={props.onBackClick} className={styles.modal_wrapper}>
            <div className={styles.modal}>
                {/*<span className={styles.title}>Login into account</span>*/}
                <div className={"px-4"}>
                    <div className={"mb-10"}>
                        <h1 className={"text-3xl"}>Login Page</h1>
                        <p className={"text-slate-600 mt-1"}>login page is so nice</p>
                    </div>
                    <Input placeholder={"Salam"}/>
                    <Input placeholder={"Salam"} className={"mt-4"}/>
                    <Button className={"mt-4"}>Login</Button>
                </div>
            </div>
        </div>
    );
};
