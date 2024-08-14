import React, { useEffect, useState } from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectorProductState } from '../../interface/state/selectors/selectorsAll';
import InputPrimary from '../UI/InputPrimary/InputPrimary';
import ButtonPrimary from '../UI/ButtonPrimary/ButtonPrimary';
import { useColors } from '../../services/utils/colors';
import { FaShoppingCart } from "react-icons/fa";
import { fetchNewProductDefault } from '../../services/products';
import { saveNewProduct } from '../../interface/state/slices/productsSlice';

export default function Home() {
    const dispatch = useDispatch();
    const _products = useSelector(selectorProductState);
    const colors = useColors(); // Obtiene los colores principales
    const [filter, setFilter] = useState('');

    useEffect(() => {
        console.log('CAMBIA EL FILTRO PRINCIPAL');
    },[filter])

    useEffect(() => {
        console.log('OBTIENE LOS PRODUCTOS', _products);
    },[_products]);

    // Agrega un nuevo producto
    const addNewProduct = () => {
        fetchNewProductDefault().then((result: any) => {
            console.log('PRODUCTO AGREGADO', result);
            dispatch(saveNewProduct(result));
        }, err => {
            console.error('ERROR AGREGANDO PRODCUTO', err);
        })
    }

    return (
        <div style={{padding: '16px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <InputPrimary
            setValue={setFilter}
            value={filter}
            placeholder="Que estas pensando?"
            />

            <ButtonPrimary
            status="enabled"
            title="Primario"
            onClick={() => {console.log('CLICK BUTTON PRIMARY')}}/>


            <ButtonPrimary
            status="enabled"
            title="+1"
            onClick={() => {addNewProduct()}}/>

            <span style={{...colors.colorText}}>Prueba de texto</span>

            <span>
                <FaShoppingCart />
            </span>
        </div>
    )
}
