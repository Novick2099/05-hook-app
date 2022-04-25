import {
  Button,
  Container,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Message from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;
  //alternativa se desestructura el target del event
  // const handleSubmit = ({target} => {
  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <Container sm={3}>
      <Typography variant="h3">02-SimpleForm</Typography>
      <Grid container item direction="column">
        <form autoComplete="off" onSubmit={handleSubmit}>
          {/* Nota Form Control es por componentes, existe TextField*/}
          <FormControl margin="normal" variant="filled">
            <InputLabel>Name:</InputLabel>
            <Input
              id="name"
              value={name}
              aria-describedby="name"
              onChange={handleInputChange}
              name="name"
            />
          </FormControl>
          <FormControl margin="normal" variant="outlined">
            <InputLabel>Email:</InputLabel>
            <Input
              id="email"
              value={email}
              aria-describedby="Email"
              onChange={handleInputChange}
              name="email"
            />
          </FormControl>
          <Grid item margin="normal">
          <Button type="submit" variant="contained" color="primary" spacing={2}>
              Enviar
            </Button>
          </Grid>
          {name === '123' && <Message /> }
        </form>
      </Grid>
    </Container>
  );
};
