import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';
import './ListaPostagem.css';

function ListaPostagem() {

    const [postagens, setPostagens] = useState<Postagem[]>([])
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    useEffect(() => {
        if (token == "") {
            alert("Faça o login para ter acesso!")
            history.push('/login')
        }

    }, [history, token])

    async function getPostagem() {
        await busca("/postagens", setPostagens, {
            headers: {
                "Authorization": token
            }
        })
    }

    useEffect(() => {
        getPostagem()
    }, [postagens.length])

    return (
        <>
            {
                postagens.map(postagem => (
                    <Box m={2}>
                        <Card className="back-back" variant="outlined">
                            <CardContent>
                                <Typography className="text-first" color="textSecondary" gutterBottom>
                                    Postagens
                                </Typography>
                                <Typography className="text-color" variant="h5" component="h2">
                                    {postagem.titulo}
                                </Typography>
                                <Typography className="text-color" variant="body2" component="p">
                                    {postagem.texto}
                                </Typography>
                                <Typography className="text-color" variant="body2" component="p">
                                    {postagem.tema?.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                    <Link to={`formularioPostagem/${postagem.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button className="button-s" variant="contained" size="small" color="primary">
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`deletarPostagem/${postagem.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size="small" color="secondary">
                                                Deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    );
}

export default ListaPostagem;