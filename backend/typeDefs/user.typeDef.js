const userTypeDef = `#graphql
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    profilePicture: String
    gender: String!
}

type Query {
    users: [User!]
    authUser: User
    user(userId: ID!): User
}

type Mutation {
    signUp(input: SignUpInput!): User
    login(input: LoginInput!): User
    logout: LogOutResponse
}

input SignUpInput {
    username: String!
    name: String!
    password: String!
    gender: String!
}


`;
