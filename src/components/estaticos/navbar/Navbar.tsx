import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import "./Navbar.css";

function Navbar() {

    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');

    function goLogout() {
        setToken("")
        alert("Usuário deslogado!")
        history.push("/login")
    }
    return (
        <>
            <AppBar position="static">
                <Toolbar className="back-bar" variant="dense">
                    <Box className="cursor">
                        <Typography variant="h5" color="inherit">
                            BLOG PESSOAL
                        </Typography>
                    </Box>

                    <Box display="flex">
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
        </>
    )
}

export default Navbar;