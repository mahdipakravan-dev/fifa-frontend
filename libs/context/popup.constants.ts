import {LoginModal} from "../../components/modal/login/login.modal";
import {RegisterModal} from "../../components/modal/register/register.modal";

export const POPUP_LOGIN = "POPUP_LOGIN"
export const POPUP_REGISTER = "POPUP_REGISTER"

export const ModalContainers : Record<string, any> = {
    [POPUP_LOGIN] : LoginModal,
    [POPUP_REGISTER] : RegisterModal
}