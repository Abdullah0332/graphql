const express = require("express");
const app = express();
const PORT = 9000;
const cors = require("cors");

const { graphqlHTTP } = require("express-graphql");

const schema = require("./Schema/index");

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
