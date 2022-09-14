import {createContext, useContext} from "react";
import {PopupType} from "./popup.type";
import {ModalContainers, POPUP_LOGIN} from "./popup.constants";

export const PopupContext = createContext<PopupType>({openPopup : () => {} , closeAllPopup : () => {}});

export const PopupConsumer = () => {
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
            <button onClick={() => openPopup({
                popupName : POPUP_LOGIN,
            })}>OpenPopup</button>
            {renderModal()}
        </>
    );
};