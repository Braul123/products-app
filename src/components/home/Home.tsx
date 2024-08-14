import React, { useEffect, useState } from 'react';
import './Home.css';
import { useSelector } from 'react-redux';
import { selectorProductState } from '../../interface/state/selectors/selectorsAll';
import InputPrimary from '../UI/InputPrimary/InputPrimary';
import ButtonPrimary from '../UI/ButtonPrimary/ButtonPrimary';
import { log } from 'console';
import { useColors } from '../../services/utils/colors';

export default function Home() {
    const _products = useSelector(selectorProductState);
    const colors = useColors(); // Obtiene los colores principales
    const [filter, setFilter] = useState('');

    useEffect(() => {
        console.log('CAMBIA EL FILTRO PRINCIPAL');
    },[filter])

    useEffect(() => {
        console.log('OBTIENE LOS PRODUCTOS', _products);
    },[_products])

    return (
        <div style={{padding: '16px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <InputPrimary
            setValue={setFilter}
            value={filter}
            placeholder="Hola mundo"
            />

            <ButtonPrimary
            status="enabled"
            title="Primario"
            onClick={() => {console.log('CLICK BUTTON PRIMARY')}}/>

            <span style={{...colors.colorText}}>Prueba de texto</span>
        </div>
    )
}
