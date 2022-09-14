import {createContext, useContext} from "react";
import {PopupType} from "./popup.type";
import {ModalContainers} from "./popup.constants";

export const PopupContext = createContext<PopupType>({openPopup : () => {} , closeAllPopup : () => {}});

export const PopupConsumer = () => {
    const {popupName} = useContext(PopupContext);

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
            {renderModal()}
        </>
    );
};