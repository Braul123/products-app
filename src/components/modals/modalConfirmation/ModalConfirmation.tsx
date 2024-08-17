import React, { useEffect, useState } from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { PropsModalConfirmation } from '../../../interface/models/interface';
import './ModalConfirmation.css'
import ButtonPrimary from '../../UI/ButtonPrimary/ButtonPrimary';

export default function ModalConfirmation(props: PropsModalConfirmation) {
    const [open, setOpen] = useState(false); // Administra la visivilidad de la modal
    // const [product, setProduct] = useState<any>();

    useEffect(() => {
        setOpen(props.open);
    }, [props]);

    // Cierra la modal
    const handleClose = () => {
        setOpen(false);
        props.setOpenModal(false);
    };

    return (
        <div>
            <Dialog
                open={open} onClose={handleClose}>
                <DialogTitle className={"titleModal"}>
                    {props.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText className='description'>
                        {props.description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <ButtonPrimary
                        title="Cancelar"
                        status="enabled"
                        onClick={() => handleClose()}
                        style={{ backgroundColor: 'transparent' }}
                    />
                    <ButtonPrimary
                        title={"Aceptar"}
                        status="enabled"
                        onClick={() => {props.pressConfirmation()}}
                    />

                </DialogActions>
            </Dialog>
        </div>
    )
}
