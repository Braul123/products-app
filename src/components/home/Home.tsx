import React, { useEffect } from 'react';
import './Home.css';
import { useSelector } from 'react-redux';
import { selectorProducState } from '../state/selectors/selectorsAll';

export default function Home() {

    const _products = useSelector(selectorProducState);

    useEffect(() => {
        console.log('OBTIENE LOS PRODUCTOS', _products);
        
    },[_products])

    return (
        <div>Home</div>
    )
}
