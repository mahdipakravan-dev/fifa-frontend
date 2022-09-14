import {createContext} from "react";

export const PopupContext = createContext<{
    bool : boolean,
    setBool : () => void
}>({bool : false , setBool : () => {}});