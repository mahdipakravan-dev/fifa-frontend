import {useContext} from "react";
import {PopupContext} from "../../../libs/context/popup.context";
import {Modal} from "../modal";
import {Input} from "../../ui/input";
import {Button} from "../../ui/button";

type Props = {

};
export const LoginModal = (props: Props) => {
    const {closeAllPopup} = useContext(PopupContext);

    return (
        <Modal onBackClick={closeAllPopup}>
            <Input placeholder={"Email address : "} type={"email"}/>
            <Input placeholder={"Password"} type={"password"} className={"mt-4"}/>
            <Button type={"submit"} className={"mt-4"}>Login</Button>
        </Modal>
    );
};