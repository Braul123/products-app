
import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { Alert, Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import "./CustomProduct.css";
import InputPrimary from '../../UI/InputPrimary/InputPrimary';
import { useColors, colorsMain } from '../../../services/utils/colors';
import { LuImagePlus } from "react-icons/lu";
import ButtonPrimary from '../../UI/ButtonPrimary/ButtonPrimary';
import { Product, PropsModalProduct } from '../../../interface/models/interface';
import { fetchEditProduct, fetchSaveNewProduct } from '../../../services/products';
import { useDispatch } from 'react-redux';
import { updateProductById, saveNewProduct } from '../../../interface/stateApp/slices/productsSlice';

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
    const [product, setProduct] = useState<any>();

    useEffect(() => {
        setOpen(props.open);
        if (props.action === "edit") {
            setProduct(props.dataProduct);
        }
    }, [props]);

    useEffect(() => {
        if (product) {
            activeEditMode();
        }
    }, [product]);

    // Inicia la data para editar un producto
    const activeEditMode = () => {
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setImage(product.image);
        setCategory(product.category);
    }

    // Cierra la modal
    const handleClose = () => {
        setOpen(false);
        props.setOpenModal(false);
    };

    // Reinicia el formulario
    const resetForm = () => {
        setName('')
        setDescription('')
        setPrice(10);
        setImage('')
        setCategory('')
    }

    // Genera la data para crear o actualizar un producto
    const getDataForm = () => {
        let sendData: Product = {
            name,
            description,
            price,
            image,
            category,
            favorite: false
        }
        // Si se esta editando agrega el id
        if (props.action == "edit") sendData.id = product.id;
        return sendData
    }

    // Valida si el formulario esta completo
    const valideForm = () => {
        const valideForm = name && description && price && category ? true : false;
        return valideForm;
    }
    // Crea el producto
    const createProduct = () => {
        // Valida si el formulario está completo
        const validForm = valideForm();

        // Si el formulario es válido crea el producto
        if (validForm) {
            const sendData = getDataForm();
            // Ejecuta la petición para creación de producto
            fetchSaveNewProduct(sendData).then((result: any) => {
                dispatch(saveNewProduct(result));
                resetForm();
                handleClose();
            }, err => {
                console.error(err);
            })
        } else {
            alert("Debes completar todos los campos del formulario para continuar");
        }
    }

    // Edita un producto
    const updateProduct = () => {
        // Valida si el formulario está completo
        const validForm = valideForm();

        // Si el formulario es válido crea el producto
        if (validForm) {
            const sendData = getDataForm();
            // Ejecuta la petición para creación de producto
            fetchEditProduct(sendData).then((result: any) => {
                dispatch(updateProductById(result));
                resetForm();
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
                    {props.action === "create" ? "Crear producto" : "Editar producto"}
                </DialogTitle>

                <DialogContent>
                    <div className='contentForm'>
                        <div className='containerImage'>
                            <div className='contentImage' style={{ borderColor: colorsMain.system.primaryColorTextDarkMode }}>
                                {/* <span className='titleContentImage'>Selecciona o arrastra hasta aquí</span> */}
                                <LuImagePlus className={'titleContentImage'} color={colorsMain.system.primaryColorTextDarkMode} />
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
                                style={{ color: colorsMain.system.primaryColorTextLigthMode }}
                            />
                            <InputPrimary
                                value={category}
                                setValue={setCategory}
                                placeholder="Categoría"
                                style={{ color: colorsMain.system.primaryColorTextLigthMode }}
                            />
                            <InputPrimary
                                value={price}
                                setValue={setPrice}
                                placeholder="Precio $"
                                type="number"
                                style={{ color: colorsMain.system.primaryColorTextLigthMode }}
                            />
                            <InputPrimary
                                value={description}
                                setValue={setDescription}
                                placeholder="Descripción"
                                style={{ color: colorsMain.system.primaryColorTextLigthMode }}
                            />
                        </div>
                    </div>


                </DialogContent>

                <DialogActions>
                    <ButtonPrimary
                        title="Cancelar"
                        status="enabled"
                        onClick={() => handleClose()}
                        style={{ backgroundColor: 'transparent' }}
                    />
                    <ButtonPrimary
                        title={props.action == "create" ? "Guardar" : "Actualizar"}
                        status="enabled"
                        onClick={() => props.action == "create" ? createProduct() : updateProduct ()}
                    />

                </DialogActions>
            </Dialog>
        </div>
    )
}
