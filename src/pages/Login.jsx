import {TextField, Button, Box, Container} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = ()=>{

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData.get('email'));
        console.log(formData.get('password'));

        let result = await axios.post(
            'http://localhost:8080/api/v1/auth/login', 
            {
                email:formData.get('email'), 
                password:formData.get('password')
            }
        );        
        console.log(result.data.accessToken);
        localStorage.setItem('token', result.data.accessToken);

        navigate('/home');


    }

    return (
        <>
            <Container maxWidth="sm">
                <Box component="form" onSubmit={handleLogin}>
                    <TextField 
                        fullWidth 
                        margin="normal" 
                        type="text" 
                        name="email"
                        label="Correo electrónico"/>
                    <TextField 
                        fullWidth 
                        margin="normal" 
                        type="password" 
                        name="password" 
                        label="Contraseña"/>
                    <Button 
                        fullWidth 
                        variant="contained"
                        type="submit">
                        Iniciar Sesion
                    </Button>
                </Box>
            </Container>

        </>
    );
}


export default Login;