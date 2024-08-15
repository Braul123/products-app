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
import CustomProduct from '../modals/customProduct/CustomProduct';
import Pagination from '@mui/material/Pagination';
import ProductCard from '../layouts/productCard/ProductCard';

export default function Home() {
    const dispatch = useDispatch();
    const _products = useSelector(selectorProductState);
    const colors = useColors(); // Obtiene los colores principales
    const [filter, setFilter] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('CAMBIA EL FILTRO PRINCIPAL');
    }, [filter])

    useEffect(() => {
        console.log('OBTIENE LOS PRODUCTOS', _products);
        setProducts(_products)
    }, [_products]);

    // Agrega un nuevo producto
    const addNewProduct = () => {
        fetchNewProductDefault().then((result: any) => {
            dispatch(saveNewProduct(result));
        }, err => {
            console.error('ERROR AGREGANDO PRODCUTO', err);
        })
    }

    // Abre la modal
    const openModalAction = () => {
        setOpenModal(true);
    }

    // Renderiza la vista cuando no hay resultados
    const renderNotFound = () => {
        return (
            <div className='contentList'>
                <div className='notFound'>
                    <FaShoppingCart style={{ fontSize: '100px', ...colors.colorTextSecondary }} />
                    <p className='textNotFound'
                        style={{ ...colors.colorText }}>Aún no hay productos, crea uno&nbsp;
                        <span onClick={openModalAction} className='underline'>aquí</span></p>
                </div>
            </div>
        )
    }

    // Renderiza la lista de productos
    const renderListProducts = () => {
        return (
            <div className='listProducts'>
                  <ProductCard
                         image=""
                         name="Un nuevo producto con texto largo"
                         description="Un producto"
                         price={100000}
                         favorite={false}
                         category='general'
                    />
            </div>
        )
    }
    

    return (
        <div className="layoutHome" style={{...colors.backgroundStyle}}>
            <InputPrimary
                setValue={setFilter}
                value={filter}
                placeholder="Que estas pensando?"
            />

            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap' }}>
                <ButtonPrimary
                    status="enabled"
                    title="Agregar un producto +1"
                    onClick={() => { addNewProduct() }} />

                <ButtonPrimary
                    status="enabled"
                    title="Crear producto"
                    onClick={() => { openModalAction() }} />
            </div>

            <span style={{ ...colors.colorText }}>Prueba de texto</span>


            {
                products.length === 0 ? 
                renderNotFound() : renderListProducts()
            }

            <Pagination count={3} page={2} onChange={() => {}} color="primary" />

            <CustomProduct open={openModal} action="create" setOpenModal={setOpenModal} />
        </div>
    )
}
