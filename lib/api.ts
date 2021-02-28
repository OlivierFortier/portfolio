import { GraphQLClient } from "graphql-request";

// ... or create a GraphQL client instance to send requests
export const client = new GraphQLClient(process.env.CMS_API_KEY);

