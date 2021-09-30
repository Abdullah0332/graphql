const express = require("express");
const app = express();
const PORT = 9000;
const graphql = require("graphql");
const {
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
} = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const userData = require("./MOCK_DATA.json");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: { type: new GraphQLList(UserType) },
    resolve(parent, args) {
      return userData;
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
});

const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

ap.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
