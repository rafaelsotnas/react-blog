import React, { useEffect } from "react";
import { Typography, Grid, Button, Box } from "@material-ui/core";
import useLocalStorage from "react-use-localstorage";
import { useHistory } from "react-router";

import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';

import './Home.css';


function Home() {

    let history=useHistory();
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if(token == '') {
            alert('Necessário fazer o login!')
            history.push('/login')
        }
    }, [token])

    return (
        <>
            <Grid className="back" container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20}>
                        <Typography className="titulo" variant="h5" gutterBottom color="textPrimary" component="h5" align="center">Expresse-se!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button className="button-color" variant="outlined">Ver postagens</Button>
                    </Box>
                    <Grid className="posts" xs={12}>
                        <TabPostagem />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;