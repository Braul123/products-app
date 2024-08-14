
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import "./CustomProduct.css";
import InputPrimary from '../../UI/InputPrimary/InputPrimary';
import { useColors, colorsMain } from '../../../services/utils/colors';
import { LuImagePlus } from "react-icons/lu";
import ButtonPrimary from '../../UI/ButtonPrimary/ButtonPrimary';
import { Product } from '../../../models/interface';
import { fetchSaveNewProduct } from '../../../services/products';

import { useDispatch } from 'react-redux';
import { saveNewProduct } from '../../../interface/state/slices/productsSlice';

/**
* @function CustomProduct
* @description Crea o edita un producto
* @returns 
*/
export default function CustomProduct() {
    // Disparador para app state
    const dispatch = useDispatch();
    // FORMULARIO
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');

    const useColorsMain = colorsMain; // Obtiene los colores principales
    const colors = useColors(); // Obtiene los colores principales

    const [open, setOpen] = useState(true);

    // Abre la modal
    const handleClickOpen = () => {
        setOpen(true);
    };

    // Cierra la modal
    const handleClose = () => {
        setOpen(false);
    };

    // Crea el producto
    const createProduct = () => {
        const sendData: Product = {
            name,
            description,
            price,
            image,
            category
        }
        // Ejecuta la petición para creación de producto
        fetchSaveNewProduct(sendData).then((result: any) => {
            console.log('PRDUCTO CREADO');
            dispatch(saveNewProduct(result));
        }, err => {
            console.error(err);
        })
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} >

                <DialogTitle className={"titleModal"}>
                    {"Crear producto"}
                </DialogTitle>

                <DialogContent>
                    <div className='contentForm'>
                        <div className='containerImage'>
                            <div className='contentImage' style={{ borderColor: colorsMain.system.primaryColorTextDarkMode }}>
                                {/* <span className='titleContentImage'>Selecciona o arrastra hasta aquí</span> */}
                                <LuImagePlus className={'titleContentImage'} color={colorsMain.system.primaryColorTextDarkMode}/>
                            </div>
                            <div className='contentInfo'>
                                <p className='textInfo'>Define la portada de tu producto seleccionando una imagen de tu galería, o arrastra el contenido hasta aquí.</p>
                            </div>
                        </div>

                        <div className='contentForm'>
                            <InputPrimary
                                value={name}
                                setValue={setName}
                                placeholder="Nombre del producto"
                                style={{color: colorsMain.system.primaryColorTextLigthMode}}
                            />
                            <InputPrimary
                                value={category}
                                setValue={setCategory}
                                placeholder="Categoría"
                                style={{color: colorsMain.system.primaryColorTextLigthMode}}
                            />
                            <InputPrimary
                                value={price}
                                setValue={setPrice}
                                placeholder="Precio $"
                                type="number"
                                style={{color: colorsMain.system.primaryColorTextLigthMode}}
                            />
                            <InputPrimary
                                value={description}
                                setValue={setDescription}
                                placeholder="Descripción"
                                style={{color: colorsMain.system.primaryColorTextLigthMode}}
                            />
                        </div>
                    </div>


                </DialogContent>

                <DialogActions>
                    <ButtonPrimary
                        title="Cancelar"
                        status="enabled"
                        onClick={() => handleClose()}
                        style={{backgroundColor: 'transparent'}}
                    />
                    <ButtonPrimary
                        title="Crear"
                        status="enabled"
                        onClick={() => createProduct()}
                    />
                   
                </DialogActions>
            </Dialog>
        </div>
    )
}
