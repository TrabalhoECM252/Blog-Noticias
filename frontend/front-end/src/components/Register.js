import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Stack from "@mui/material/Stack";

export default function Register() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();

        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:4000/api/usuarios/register",
            data: {
                email,
                password,
            },
        };

        // make the API call
        axios(configuration)
            .then((result) => {
                setRegister(true);
            })
            .catch((error) => {
                error = new Error();
            });
    };

    return (
        <>
            <Stack
                direction="column"
                spacing={4}
                alignContent={"center"}
                alignItems="center"
            >
                <h2>Register</h2>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    {/* nome */}
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="nome"
                            name="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Enter name"
                        />
                    </Form.Group>

                    {/* email */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                        />
                    </Form.Group>

                    {/* password */}
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </Form.Group>

                    {/* submit button */}
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Register
                    </Button>

                    {/* display success message */}
                    {register ? (
                        <p className="text-success">Registrado com sucesso.</p>
                    ) : (
                        <p className="text-danger">Não foi possível registrar usuário.</p>
                    )}
                </Form>
            </Stack>
        </>
    );
}