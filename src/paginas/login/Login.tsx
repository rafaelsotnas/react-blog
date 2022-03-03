import React, { ChangeEvent, useState, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addToken } from '../../store/tokens/actions';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import "./Login.css";


function Login() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0, usuario: "", senha: "", token: ""
    })
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if (token !== "") {
            dispatch(addToken(token))
            history.push('/home')
        }
    }, [token])
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            alert("Usuário logado com sucesso!");
        } catch (error) {
            alert("Dados inconsistentes!");
        }
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid xs={6} alignItems="center">
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography className="texts" variant="h3" gutterBottom color="textPrimary" component="h3" align="center">Entrar</Typography>
                        <TextField
                            value={userLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="usuario"
                            label="Usuário"
                            variant="outlined"
                            name="usuario"
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            value={userLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="senha"
                            label="Senha"
                            variant="outlined"
                            name="senha"
                            margin="normal"
                            type="password"
                            fullWidth
                        />
                        <Box marginTop={2} textAlign="center">
                            <Button className="button-style" type="submit" variant="contained" color="primary">
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display="flex" justifyContent="center" marginTop={2}>
                        <Box marginRight={1}>
                            <Typography className="texts2" variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
                        </Box>
                        <Link className="text-register" to='/cadastrousuario'>
                            <Typography text-decoration="none" variant="subtitle1" gutterBottom align="center">Cadastre-se!</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid className="back-login" xs={6} />
        </Grid>
    );
}

export default Login;