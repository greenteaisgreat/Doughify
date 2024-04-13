//MUST use extension after filenames when importing (i.e., data.js)
//this is due to ESM in combination with Node
import { users } from "../dummyData/data.js";

const userResolver = {
  Query: {
    users: () => users,
  },
  Mutation: {},
};

export default userResolver;