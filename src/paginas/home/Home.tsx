import React, { useEffect } from "react";
import { Typography, Grid, Button, Box } from "@material-ui/core";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

import { TokenState } from '../../store/tokens/tokensReducer';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';

import { toast } from 'react-toastify';

import './Home.css';
import { Link } from "react-router-dom";

function Home() {

    let history=useHistory();
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );

    useEffect(() => {
        if(token === '') {
            toast.error('Necessário fazer o login!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined
            });
            history.push('/login')
        }
    }, [token])

    return (
        <>
            <Grid className="back" container direction="row" justifyContent="center" alignItems="center">
                <Grid className="container" alignItems="center" item xs={6}>
                    <Box paddingX={20}>
                        <Typography className="titulo" variant="h5" gutterBottom color="textPrimary" component="h5" align="center">Expresse-se!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to='/postagens' className="button-color">
                        <Button className="button-color" variant="outlined">Ver postagens</Button>
                        </Link>
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