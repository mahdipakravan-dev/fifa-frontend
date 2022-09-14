import {useContext} from "react";
import {PopupContext} from "./popup-context";

type Props = {

};
export const PopupConsumer = (props: Props) => {
    const data = useContext(PopupContext);
    console.log('popup Data ' , data)
    return (
        <div>
        </div>
    );
};