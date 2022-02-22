import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

import './ListaPostagem.css';

function ListaPostagem() {
    return (
        <>
            <Box m={2}>
                <Card className="back-back" variant="outlined">
                    <CardContent>
                        <Typography className="text-first" color="textSecondary" gutterBottom>
                            Postagens
                        </Typography>
                        <Typography className="text-color" variant="h5" component="h2">
                            Título
                        </Typography>
                        <Typography className="text-color" variant="body2" component="p">
                            Texto da postagem
                        </Typography>
                        <Typography className="text-color" variant="body2" component="p">
                            Tema
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5}>
                            <Link to="" className="text-decorator-none">
                                <Box mx={1}>
                                    <Button className="button-s" variant="contained" size="small" color="primary">
                                        Atualizar
                                    </Button>
                                </Box>
                            </Link>
                            <Link to="" className="text-decorator-none">
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
        </>
    );
}

export default ListaPostagem;