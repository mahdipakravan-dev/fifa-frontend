import {gql} from "@apollo/client";

export const MUTATION_REGISTER = gql`
    mutation register($input: CreateAccountDto!){
        account_register(input: $input){
            ok,
            error
        }
    }
`
