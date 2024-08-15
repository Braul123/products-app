import React, { useEffect, useState } from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectorProductState } from '../../interface/stateApp/selectors/selectorsAll';
import ButtonPrimary from '../UI/ButtonPrimary/ButtonPrimary';
import { useColors } from '../../services/utils/colors';
import { FaShoppingCart } from "react-icons/fa";
import { fetchGetProducts, fetchNewProductDefault } from '../../services/products';
import { saveNewProduct } from '../../interface/stateApp/slices/productsSlice';
import CustomProduct from '../modals/customProduct/CustomProduct';
import ProductCard from '../layouts/productCard/ProductCard';
import PaginationLayout from '../layouts/pagination/PaginationLayout';
import SeacrhLayout from '../layouts/search/Search';
import { Product } from '../../interface/models/interface';
import { log } from 'console';

export default function Home() {
    const dispatch = useDispatch();
    const _products = useSelector(selectorProductState);
    const colors = useColors(); // Obtiene los colores principales
    const [openModal, setOpenModal] = useState(false);
    const [products, setProducts] = useState([]);
    
    // PAGINADOR
    const [skip, setSkip] = useState(0);
    const limit = 4;
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);

    // useEffect(() => {
    //     getProducts();
    // },[]);

    useEffect(() => {
        console.log('OBTIENE LOS PRODUCTOS', _products);
        // setProducts(_products);
        if (skip == 0) getProducts();
        else setSkip(0);
        
        initPaginator();
    }, [_products]);

    useEffect(() => {
        getProducts();
    },[skip]);

    // Inicia la data del componente
    const getProducts = () => {
        fetchGetProducts(skip, limit, _products).then((result: any) => {
            console.log('SI LLEGA PERROOO', result);
            setProducts(result); 
        }, err => {
            console.error('ERROR AGREGANDO PRODCUTO', err);
        })
    }

    // Identifica los datos necesarios para armar el paginador
    const initPaginator = () => {
        const totalPages = Math.ceil(_products.length / limit);
        setTotalPages(totalPages)
        setSkip(0);
    }

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

    // Si cambia el paginador
    const changePaginator = async (page: any) => {
        console.log('PAGINA *****', page);
        setPage(page);
        const _skip = Math.ceil(limit*page)-limit;
        await setSkip(_skip);
    }

    // Renderiza la vista cuando no hay resultados
    const renderNotFound = () => {
        return (
            <div className='contentListNotFound'>
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
                {
                    // Itera los productos para mostrarlos en la lista
                    products.map((product: Product, index: number) => {
                        return (
                            <ProductCard key={`product_${product.id}`} {...product} />
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className="layoutHome" style={{ ...colors.backgroundStyle }}>
            {/* Buscador general */}
            <SeacrhLayout onReturn={(event: any) => console.log(event)} />

            {/* Acciones de la cabecera */}
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


            {/* Listado de productos */}
            <div className='contentListProducts'>
                {
                    products.length === 0 ?
                        renderNotFound() : renderListProducts()
                }
            </div>

            <PaginationLayout count={totalPages} initalPage={page} onChange={(page: number) => {changePaginator(page)}} />

            <CustomProduct open={openModal} action="create" setOpenModal={setOpenModal} />
        </div>
    )
}
