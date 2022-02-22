import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';

import ListaPostagem from '../listapostagem/ListaPostagem';

import './TabPostagem.css';

function TabPostagem() {
    /*Manipulação de valores das tabs.*/
    const [value, setValue] = useState("1")
    function handleChange(e: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}>
                <AppBar className="bar2" position="static">
                    <Tabs centered indicatorColor="secondary" onChange={handleChange}>
                        <Tab className="text-head" label="Todas as postagens" value="1" />
                        <Tab className="text-head" label="Sobre nós" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel className="panel" value="1">
                    <Box className="box11" display="flex" flexWrap="wrap" justifyContent="right">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel className="box-mod" value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary"
                        component="h5" align="center"></Typography>
                    <Typography className="text-mod" variant="body1" gutterBottom color="textPrimary"
                        align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing el
                        it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        . Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in rep
                        rehenderit in voluptate velit esse cillum dolore eu fugiat nulla pari
                        atur. Excepteur sint occaecat cupidatat non proident, sunt in culpa q
                        ui officia deserunt mollit anim id est laborum.</Typography>
                </TabPanel>
            </TabContext>
        </>
    )
}

export default TabPostagem;