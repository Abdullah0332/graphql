import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../graphql/Queries";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const GetUsers = () => {
  const [users, setUsers] = useState([]);

  const { error, loading, data } = useQuery(LOAD_USERS);

  useEffect(() => {
    setUsers(data?.getAllUsers);
  }, [data]);

  return (
    <div>
      <h2>All Users</h2>
      <Button
        variant="contained"
        onClick={() => {
          window.location = "/create-user";
        }}
      >
        Create User
      </Button>
      {users?.map((val) => (
        <Grid container spacing={0}>
          <Grid item xs={1} sm={3} md={3}>
            <Card sx={{ minWidth: 275 }} style={{ marginTop: "15px" }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {val?.firstName} {val?.lastName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {val?.email}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default GetUsers;
