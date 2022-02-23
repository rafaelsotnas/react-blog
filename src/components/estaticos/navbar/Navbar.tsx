import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
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
                                Cadastrar Tema
                            </Typography>
                        </Box>
                        <Link className="nav-route" to="/login">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;