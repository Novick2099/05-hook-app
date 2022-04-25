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
import {useForm} from "../../hooks/useForm";

export const FormWithCustomHook = () => {

    const [formState, setFormState] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formState;

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
                    <FormControl margin="normal" variant="filled">
                        <InputLabel>Email:</InputLabel>
                        <Input
                            id="email"
                            value={email}
                            aria-describedby="Email"
                            onChange={handleInputChange}
                            name="email"
                        />
                    </FormControl>
                        <FormControl margin="normal" variant="filled">
                        <InputLabel>Password:</InputLabel>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            aria-describedby="Password"
                            onChange={handleInputChange}
                            name="password"
                        />
                    </FormControl>
                    <Grid item margin="normal">
                        <Button type="submit" variant="contained" color="primary" spacing={2}>
                            Enviar
                        </Button>
                    </Grid>
                </form>
            </Grid>
        </Container>
    );
};