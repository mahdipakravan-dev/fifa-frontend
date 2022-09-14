import {createContext} from "react";

export const PopupContext = createContext<{
    popupName ?: string,
    popupData ?: any
    openPopup : (popupName : string , popupData : any) => void,
    closeAllPopup : () => void
}>({openPopup : () => {} , closeAllPopup : () => {}});