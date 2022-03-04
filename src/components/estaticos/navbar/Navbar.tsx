import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import "./Navbar.css";
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from 'react-redux';
import { addToken } from '../../../store/tokens/actions';

import { toast } from 'react-toastify';

function Navbar() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuário deslogado!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined
        });
        history.push("/login")
    }

    var navbarComponent;

    if(token!=='') {
        navbarComponent = 
        <AppBar position="static">
                <Toolbar className="back-bar" variant="dense">
                    <Box className="cursor">
                        <Typography variant="h5" color="inherit">
                            BLOG PESSOAL
                        </Typography>
                    </Box>

                    <Box className="container" display="flex">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                <Link className="nav-route" to="/home">Home</Link>
                            </Typography>
                        </Box>

                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                <Link className="nav-route" to="/postagens">Postagens</Link>
                            </Typography>
                        </Box>

                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                <Link className="nav-route" to="/temas">Temas</Link>
                            </Typography>
                        </Box>

                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                <Link className="nav-route" to="/formularioTema">Cadastrar Tema</Link>
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor" onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;