import {useContext} from "react";
import {PopupContext} from "./popup-context";
import {LoginModal} from "../../components/modal/login/login-modal";

type Props = {

};

const ModalContainers : Record<string, any> = {
    ["MODAL_LOGIN"] : LoginModal
}

export const PopupConsumer = (props: Props) => {
    const {popupName,popupData , openPopup} = useContext(PopupContext);

    const renderModal = () => {
        if(!popupName) return ;
        const ModalComponent = ModalContainers[popupName];
        if (!ModalComponent) {
            return null;
        }
        return <ModalComponent />;
    };

    return (
        <>
            <button onClick={() => openPopup("MODAL_LOGIN" , {data : "Mahdi"})}>OpenPopup</button>
            {renderModal()}
        </>
    );
};