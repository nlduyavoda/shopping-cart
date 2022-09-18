// import { refreshToken } from "utils/keycloak/keycloak.helpers";
import { GraphQLClient } from "graphql-request";

const endpoint = "http://localhost:3000/graphql";
const graphQLClient = new GraphQLClient(endpoint, { headers: {} });

export const requestGQL = (query, variables) => {
  // if (process.env.REACT_APP_KEYCLOAK_ENABLED === 'true') {
  //   const token = await refreshToken()
  //   const requestHeaders = {
  //     Authorization: `Bearer ${token}`
  //   }
  return graphQLClient
    .request(query, variables)
    .then((res) => console.log("res :>> ", res));
};
