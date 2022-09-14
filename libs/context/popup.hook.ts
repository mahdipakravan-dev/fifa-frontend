import {useContext} from "react";
import {PopupContext} from "./popup.context";
import {PopupType} from "./popup.type";

export const usePopup = () : PopupType => {
    const popUpData = useContext(PopupContext);

    return popUpData
}