import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user.resolver";
import transactionResolver from "./transaction.resolver";

//this file is used to combine all resolvers into a single array for
//ease of accessing. this approach helps with scaling, as any new
//resolvers can be added into their own file and simply plugged in here
const mergedResolvers = mergeResolvers([userResolver, transactionResolver]);

export default mergedResolvers;
