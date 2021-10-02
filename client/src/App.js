import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError, OnError } from "@apollo/client/link/error";
import GetUsers from "./components/GetUsers";
import Form from "./components/Form";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:9000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={GetUsers} />
          <Route exact path="/create-user" component={Form} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
