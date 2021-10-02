import React, { useEffect, useState } from "react";
import { CREATE_USER_MUTATION } from "../graphql/Mutations";
import { useMutation } from "@apollo/client";
import { Grid, TextField, Button } from "@mui/material";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { data, error }] = useMutation(CREATE_USER_MUTATION);

  console.log(data);

  useEffect(() => {
    if (data) {
      window.location = "/";
    }
  }, [data]);

  const addUser = (e) => {
    e.preventDefault();

    createUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={1} sm={3} md={3} />
        <Grid item xs={10} sn={6} md={6}>
          <h2>Create User</h2>
          <form onSubmit={addUser}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              fullWidth
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              fullWidth
              placeholder="Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <br />
            <Button variant="contained" type="submit" fullWidth>
              Create User
            </Button>
            <br />
            <br />
            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                window.location = "/";
              }}
            >
              All Users
            </Button>
          </form>
        </Grid>
        <Grid item xs={1} sm={3} md={3} />
      </Grid>
    </div>
  );
};

export default Form;
