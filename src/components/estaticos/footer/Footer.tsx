import React from 'react';
import { Typography, Grid, Box } from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="box1">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography className="text" variant="h5" align="center" gutterBottom>Redes sociais</Typography>
                        </Box>
                        <Box className="footer-social" display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.instagram.com/rafaelsotnas/">
                                <InstagramIcon className="footer-social" />
                            </a>
                            <a href="https://github.com/rafaelsotnas">
                                <GitHubIcon className="footer-social" />
                            </a>
                            <a href="https://www.linkedin.com/in/rafael-ferreira-7b6600205/">
                                <LinkedInIcon className="footer-social" />
                            </a>
                        </Box>
                        <Box>
                            <Box paddingTop={1}>
                                <Typography className="footer-copy" variant="subtitle2" align="center" gutterBottom>© 2022 Copyright</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;