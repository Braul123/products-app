
import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { Alert, Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import "./CustomProduct.css";
import InputPrimary from '../../UI/InputPrimary/InputPrimary';
import { useColors, colorsMain } from '../../../services/utils/colors';
import { LuImagePlus } from "react-icons/lu";
import ButtonPrimary from '../../UI/ButtonPrimary/ButtonPrimary';
import { Product, PropsModalProduct } from '../../../interface/models/interface';
import { fetchSaveNewProduct } from '../../../services/products';

import { useDispatch } from 'react-redux';
import { saveNewProduct } from '../../../interface/stateApp/slices/productsSlice';


/**
* @function CustomProduct
* @description Crea o edita un producto
* @returns 
*/
export default function CustomProduct(props: PropsModalProduct) {
    // Disparador para app state
    const dispatch = useDispatch();
    // FORMULARIO
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(10);
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');

    const useColorsMain = colorsMain; // Obtiene los colores principales
    const colors = useColors(); // Obtiene los colores principales

    const [open, setOpen] = useState(false); // Administra la visivilidad de la modal

    useEffect(() => {
        setOpen(props.open);
    },[props]);

    // Cierra la modal
    const handleClose = () => {
        setOpen(false);
        props.setOpenModal(false);
    };

    // Crea el producto
    const createProduct = () => {
        // Valida si el formulario está completo
        const valideForm = name && description && price && category ? true : false;

        // Si el formulario es válido crea el producto
        if (valideForm) {
            const sendData: Product = {
                name,
                description,
                price,
                image,
                category,
                favorite: false
            }
            // Ejecuta la petición para creación de producto
            fetchSaveNewProduct(sendData).then((result: any) => {
                console.log('PRDUCTO CREADO');
                dispatch(saveNewProduct(result));
                handleClose();
            }, err => {
                console.error(err);
            })
        } else {
            alert("Debes completar todos los campos del formulario para continuar");
        }
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
                        title="Guardar"
                        status="enabled"
                        onClick={() => createProduct()}
                    />
                   
                </DialogActions>
            </Dialog>
        </div>
    )
}
