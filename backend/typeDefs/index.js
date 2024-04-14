import { mergeTypeDefs } from "@graphql-tools/merge";
import transactionTypeDef from "./transaction.typeDef.js";
import userTypeDef from "./user.typeDef.js";

//transaction and user typeDefs will be grouped together and exported from here
const mergedTypeDefs = mergeTypeDefs([transactionTypeDef, userTypeDef]);

export default mergedTypeDefs;
