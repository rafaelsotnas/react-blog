import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

import Tema from '../../../models/Tema';
import { busca } from '../../../services/Service';
import './ListaTema.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListaTema() {

    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );
    let history = useHistory();

    useEffect(() => {
        if (token == "") {
            alert("Faça o login para ter acesso!")
            history.push('/login')
        }

    }, [history, token])

    async function getTema() {
        await busca("/temas", setTemas, {
            headers: {
                "Authorization": token
            }
        })
    }

    useEffect(() => {
        getTema()
    }, [temas.length])
    return (
        <>
            {
                temas.map(tema => (
                    <Box m={2}>
                        <Card className="back-panel" variant="outlined">
                            <CardContent>
                                <Typography className="text-head2" color="textSecondary" gutterBottom>
                                    Tema
                                </Typography>
                                <Typography className="text-head2" variant="h5" component="h2">
                                    {tema.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                    <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button className="button-update" variant="contained" size="small" color="primary">
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
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

export default ListaTema;