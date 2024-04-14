import { mergeTypeDefs } from "@graphql-tools/merge";
import transactionTypeDef from "./transaction.typeDef.js";
import userTypeDef from "./user.typeDef.js";

//transaction and user typeDefs will be grouped together and exported from here;
//it's beneficial to merge resolvers, type defs, etc. due to modularity of code.
//if someone wanted to expand upon your code and/or collaborate, this allows
//for easier integration, separation of concerns and even reusability
const mergedTypeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef]);

export default mergedTypeDefs;
