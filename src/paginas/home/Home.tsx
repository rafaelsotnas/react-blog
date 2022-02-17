import React from "react";
import { Typography, Grid, Button, Box } from "@material-ui/core";
import './Home.css';

function Home() {
    return (
        <>
            <Grid className="back" container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20}>
                        <Typography className="titulo" variant="h5" gutterBottom color="textPrimary" component="h5" align="center">Expresse-se!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button className="button-color" variant="outlined">Ver postagens</Button>
                    </Box>
                    <Grid className="posts" xs={12}></Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;