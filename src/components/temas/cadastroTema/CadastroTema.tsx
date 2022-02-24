import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';

import Tema from '../../../models/Tema';

import './CadastroTema.css';
import { buscaID, post, put } from '../../../services/Service';

function CadastroTema() {

    let history = useHistory();

    /*Capturar parametros enviados pela URL,
    podendo cadastrar ou alterar o tema, através do ID.*/
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token')

    const [tema, setTema] = useState<Tema>({
        id: 0, descricao: ''
    })

    useEffect(() => {
        if (token == '') {
            alert('É necessário estar logado!')
            history.push('/login')
        }
    }, [history, token])
    /*Função de monitoramento, que se conecta com a API,
    e traz o ID solicitado no front.*/
    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])
    /*Captura o findById do useEffect, aciona o buscaID da service,
    e tenta localizar o ID solicitado, para alterar o tema do ID requisitado
    no front.*/
    async function findById(id: string) {
        buscaID(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }
    /*Guarda valores digitados no formulário
    e atribui ao setTema, alterando os valores "originais".*/
    function updatedTema(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        })
    }
    /*Nesse caso, ao cair no if, o ID existe, então o tema será atualizado.
    No else, o ID não existe, portando ele cadastrará o tema.*/
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== undefined) {
            put(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema atualizado!');
        } else {
            post(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema cadastrado!')
        }
        back()
    }
    /*Essa função nos redireciona para a página de temas.*/
    function back() {
        history.push('/temas')
    }

    return (
        <Container maxWidth="sm" className="top">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center">Formulário</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="Descrição" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;