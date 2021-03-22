import { GraphQLClient } from "graphql-request";

// création du client GraphQL pour se connecter à l'API du CMS
export const client = new GraphQLClient(process.env.CMS_API_KEY);

