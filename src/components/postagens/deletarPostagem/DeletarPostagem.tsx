import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

import Postagem from "../../../models/Postagem";
import { buscaID, deleteID } from "../../../services/Service";

import './DeletarPostagem.css';

function DeletarPostagem() {

    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token')
    const [postagem, setPostagem] = useState<Postagem>();

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
        buscaID(`/postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        history.push('/postagens')
        deleteID(`/postagens/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        alert('Postagem deletada!')
    }

    function nao() {
        history.push('/postagens')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar a postagem:
                            </Typography>
                            <Typography color="textSecondary">
                                {postagem?.titulo}
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

export default DeletarPostagem;