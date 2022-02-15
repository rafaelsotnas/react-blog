import React from "react";
import { Typography, Grid, Button, Box } from "@material-ui/core";
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "white" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "black", fontWeight: "bold" }}>Seja bem-vindx!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>Expresse-se!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "darkgrey", color: "white" }}>Ver postagens</Button>
                    </Box>
                    <Grid item xs={6}>
                        <img
                            src="https://c.tenor.com/qycLujT-fskAAAAd/twilight-zone.gif"
                            alt="tz"
                            width="650px" height="500px"
                        />
                    </Grid>
                    <Grid xs={12} style={{ backgroundColor: "white" }}>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;