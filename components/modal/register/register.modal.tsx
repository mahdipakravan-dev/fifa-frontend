import {useContext} from "react";
import {PopupContext} from "../../../libs/context/popup.context";
import {Modal} from "../modal";
import {Input} from "../../ui/input";
import {Button} from "../../ui/button";
import {useForm} from "react-hook-form";
import {useQuery, gql, useMutation} from "@apollo/client";
import {CreateAccountDto} from "../../../graph/graphql";
import {MUTATION_REGISTER} from "../../../graph/api/register.api";

type Props = {

};

export const RegisterModal = (props: Props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<CreateAccountDto>();
    const [sendRegisterMutation , {loading , error ,data : registerResult}] = useMutation(MUTATION_REGISTER)
    const {closeAllPopup} = useContext(PopupContext);

    return (
        <Modal onBackClick={closeAllPopup} popupTitle={"Register Popup"} desc={"register to this most good application"}>
            <form onSubmit={handleSubmit((value) => {
                sendRegisterMutation({variables : {
                    input : value
                }}).finally()
            })}>
                <Input placeholder={"Email address : "} type={"email"} register={register("email")}/>
                <Input placeholder={"Password"} type={"password"} className={"mt-4"} register={register("password")}/>
                <Button type={"submit"} className={"mt-4"}>Login</Button>
            </form>
        </Modal>
    );
};
