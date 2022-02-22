import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';

import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';

import './CadastroUsuario.css';

function CadastroUsuario() {

    /*useHistory: controle, permissão de navegação web.*/
    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("");

    /*Estrutura de cadastro.*/
    const [user, setUser] = useState<User>({
        id: 0, nome: "", usuario: "", senha: ""
    })

    /*"          " login.*/
    const [userResult, setUserResult] = useState<User>({
        id: 0, nome: "", usuario: "", senha: ""
    })

    /*Verificará mudanças e irá disparar essas alterações no código em função do que se configura.
    Nesse caso, redirecionará para o login, pois o usuário foi cadastrado e seu ID não é 0.*/
    useEffect(() => {
        if (userResult.id !== 0) {
            history.push('/login')
        }
        /*Validação de login.*/
    }, [userResult])
    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        /*Prevenção do carregamento da página.*/
        e.preventDefault()
        if (confirmarSenha ===  user.senha && user.senha.length >= 8) {
            cadastroUsuario(`usuarios/cadastrar`, user, setUserResult)
            alert("Usuário cadastrado com sucesso!");
        } else {
            alert("Verifique se os campos foram preenchidos corretamente.");
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='img'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography className="texts2" variant="h3" gutterBottom
                            color="textPrimary" component="h3" align="center">Cadastrar
                        </Typography>
                        <TextField
                            value={user.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="nome"
                            label="Nome"
                            variant="outlined"
                            name="nome"
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            value={user.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="usuario"
                            label="Usuário"
                            variant="outlined"
                            name="usuario"
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            value={user.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="senha"
                            label="Senha"
                            variant="outlined"
                            name="senha"
                            margin="normal"
                            type="password"
                            fullWidth
                        />
                        <TextField
                            value={confirmarSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id="confirmarSenha"
                            label="Confirmar Senha"
                            variant="outlined"
                            name="confirmarSenha"
                            margin="normal"
                            type="password"
                            fullWidth
                        />
                        <Box marginTop={2} textAlign="center">
                            <Link to="/login" className="text-decorator-none">
                                <Button className="button-cancel" variant="contained" color="secondary">
                                    Cancelar
                                </Button>
                            </Link>
                                <Button className="button-submit" type="submit" variant="contained" color="primary">
                                    Cadastrar
                                </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;