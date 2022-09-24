import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri : "http://localhost:1234/graphql",
    cache : new InMemoryCache({
        typePolicies : {
            Query : {
                fields : {
                    isLoggedIn : {
                        read() {
                            return true
                        },
                        merge() {
                            return "MERGE"
                        },
                        keyArgs() {
                            return "KEY"
                        }
                    }
                }
            }
        }
    })
})
