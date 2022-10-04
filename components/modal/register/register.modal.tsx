import { useContext } from "react";
import { PopupContext } from "../../../libs/context/popup.context";
import { Modal } from "../modal";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import {
  CreateAccountDto,
  CreateAccountOutputDto,
} from "../../../graph/graphql";
import { MUTATION_REGISTER } from "../../../graph/api/register.api";

export const RegisterModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountDto>();
  const [sendRegisterMutation, { loading, error, data: registerResult }] =
    useMutation<{ account_register: CreateAccountOutputDto }>(
      MUTATION_REGISTER,
      {
        onCompleted: ({ account_register }) => {},
        onError: () => {},
      }
    );
  const { closeAllPopup } = useContext(PopupContext);

  console.log({ registerResult: registerResult?.account_register, error });
  return (
    <Modal
      onBackClick={closeAllPopup}
      popupTitle={"Register Popup"}
      desc={"register to this most good application"}
    >
      <form
        onSubmit={handleSubmit((input) => {
          sendRegisterMutation({
            variables: {
              input,
            },
          }).finally();
        })}
      >
        <Input
          placeholder={"Email address : "}
          type={"text"}
          error={errors["email"]?.message}
          register={register("email")}
        />
        <Input
          placeholder={"Password"}
          type={"password"}
          error={errors["password"]?.message}
          className={"mt-4"}
          register={register("password")}
        />
        <Button
          loading={loading}
          type={"submit"}
          className={"mt-4"}
          variants={"contained"}
        >
          Register
        </Button>
      </form>
    </Modal>
  );
};
