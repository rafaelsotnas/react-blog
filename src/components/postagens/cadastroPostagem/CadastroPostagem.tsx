import React, { ChangeEvent, useEffect, useState } from 'react';
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import { busca, buscaID, post, put } from '../../../services/Service';

import Postagem from '../../../models/Postagem';
import Tema from '../../../models/Tema';

import './CadastroPostagem.css';

function CadastroPostagem() {

    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    /*Armazerará os temas.*/
    const [temas, setTemas] = useState<Tema[]>([]);
    const [token, setToken] = useLocalStorage('token')

    useEffect(() => {
        if (token === '') {
            alert('É necessário estar logado!')
            history.push('/login')
        }
    }, [history, token])

    /*Armazena tema específico de acordo com o ID.*/
    const [tema, setTema] = useState<Tema>({
        id: 0, descricao: ''
    })

    const [postagem, setPostagem] = useState<Postagem>({
        id: 0, titulo: '', texto: '', tema: null
    })

    /*Função para atribuir postagem a um tema específico.*/
    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca('/temas', setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    /*Localiza o ID específico e armazena no setPostagem.*/
    async function findByIdPostagem(id: string) {
        await buscaID(`/postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem atualizada!');
        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema cadastrado!')
        }
        back()
    }

    function back() {
        history.push('/postagens')
    }

    return (
        <Container maxWidth="sm" className="top">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center">Formulário</Typography>
                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="Título" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="Texto" variant="outlined" name="texto" margin="normal" fullWidth />
                <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">Tema</InputLabel>
                    <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper-label"
                        /*Lógica para exibição e seleção dos temas cadastrados ao integrar postagem com tema.*/
                        onChange={(e) => buscaID(`temas/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {/*Mapeando temas por ID.*/}
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                            ))
                        }

                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default CadastroPostagem;