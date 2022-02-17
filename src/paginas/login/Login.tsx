import React from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "./Login.css";

function Login() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid xs={6} alignItems="center">
                <Box paddingX={20}>
                    <form>
                        <Typography className="texts" variant="h3" gutterBottom color="textPrimary" component="h3" align="center">Entrar</Typography>
                        <TextField id="usuario" label="Usuário" variant="outlined" name="usuario" margin="normal" fullWidth />
                        <TextField id="senha" label="Senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign="center">
                            <Link to="/home" className="text-decorator-none">
                                <Button className="button-style" type="submit" variant="contained" color="primary">
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display="flex" justifyContent="center" marginTop={2}>
                        <Box marginRight={1}>
                            <Typography className="texts2" variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
                        </Box>
                        <Typography className="texts" variant="subtitle1" gutterBottom align="center">Cadastre-se!</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid className="back-login" xs={6} />
        </Grid>
    );
}

export default Login;