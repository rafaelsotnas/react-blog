import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

import './ListaTema.css';

function ListaTema() {
    return (
        <>
            <Box m={2}>
                <Card className="back-panel" variant="outlined">
                    <CardContent>
                        <Typography className="text-head2" color="textSecondary" gutterBottom>
                            Tema
                        </Typography>
                        <Typography className="text-head2" variant="h5" component="h2">
                            Descrição
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5}>
                            <Link to="" className="text-decorator-none">
                                <Box mx={1}>
                                    <Button className="button-update" variant="contained" size="small" color="primary">
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

export default ListaTema;