import React from "react";
import { Box, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Modal from '@material-ui/core/Modal';

import CadastroPostagem from "../cadastroPostagem/CadastroPostagem";

import './ModalPostagem.css';

/*Centraliza o modal.*/
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: `absolute`,
            widht: 400,
            backgroundColor: theme.palette.background.paper,
            border: `2px solid #000`,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

function ModalPostagem() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper} >
            <Box display="flex" justifyContent="flex-end" className="cursor">
                <CloseIcon onClick={handleClose} />
            </Box>
            <CadastroPostagem />
        </div >
    );

    return (
        <div>
            <Button
                className="btnModal"
                variant="outlined"
                onClick={handleOpen}>Nova postagem</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                {body}
            </Modal>
        </div>
    );
}

export default ModalPostagem;