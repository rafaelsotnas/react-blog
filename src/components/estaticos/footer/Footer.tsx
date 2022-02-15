import React from 'react';
import { Typography, Grid, Box } from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "grey", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais!</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.instagram.com/rafaelsotnas/" target="_blank">
                                <InstagramIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://github.com/rafaelsotnas" target="_blank">
                                <GitHubIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                        <Box style={{ backgroundColor: "darkgrey", height: "60px" }}>
                            <Box paddingTop={1}>
                                <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }}>© 2022. Copyright</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;