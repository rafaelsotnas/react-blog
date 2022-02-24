import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

import { buscaID, deleteID } from "../../../services/Service";
import Tema from "../../../models/Tema";

import './DeletarTema.css';

function DeletarTema() {

    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token')
    const [tema, setTema] = useState<Tema>();

    useEffect(() => {
        if (token == '') {
            alert('É necessário estar logado!')
            history.push('/login')
        }
    }, [history, token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaID(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        history.push('/temas')
        deleteID(`/temas/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        alert('Tema deletado!')
    }

    /*Caso não desejar excluir, redireciona pra tela de temas.*/
    function nao() {
        history.push('/temas')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar o tema:
                            </Typography>
                            <Typography color="textSecondary">
                                {tema?.descricao}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color='primary'>
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button onClick={nao} variant="contained" className="marginLeft" size='large' color='primary'>
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}

export default DeletarTema;