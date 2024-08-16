import React, { useEffect, useState } from 'react';
import './ProductCard.css';
import notFoundImage from '../../../assets/img/Image-not-found.png';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Product } from '../../../interface/models/interface';
import { MdDelete } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import CustomProduct from '../../modals/customProduct/CustomProduct';
import ModalConfirmation from '../../modals/modalConfirmation/ModalConfirmation';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../../interface/stateApp/slices/productsSlice';

const ProductCard = (props: Product) => {
  // Disparador para app state
  const dispatch = useDispatch();
  const [product, setProduct] = useState<any>(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModalConfirmation, setOpenModalConfirmation] = useState(false); // Para la modal de confirmación

  useEffect(() => {
    setProduct(props);
  }, [props]);

  // Elimina el producto de la colección
  const actionDeleteProduct = () => {
    console.log('ESTE ES EL ID DEL PRODUCTO', product);
    
    dispatch(deleteProduct(product));
  }

  if (!product) {
    return null
  }
  return (
    <div className="product-card">
      <div className='actionsProduct'>
        <div className='contentAction'>
          <button className='buttonAction' onClick={() => setOpenModalConfirmation(true)}>
            <MdDelete fontSize={16} />
          </button>
          <button className='buttonAction' onClick={() => setOpenModal(true)} >
            <IoMdSettings fontSize={16} />
          </button>
        </div>
      </div>
      <div className="product-image-container">
        <img src={product.image ? product.image : notFoundImage} alt="" />
      </div>
      <h2 className="product-title">{product.name}</h2>
      <p className="product-description">{product.description}</p>


      <div className="product-footer">
        <span className="product-price">${parseFloat(product.price)}</span>
        <button className="favorite-button">
          {
            product.favorite ? <MdFavorite style={{ fontSize: '20px', color: 'red' }} /> :
              <MdFavoriteBorder style={{ fontSize: '20px' }} />

          }
        </button>
      </div>

      <CustomProduct open={openModal} action="edit" setOpenModal={setOpenModal} dataProduct={product} />

      <ModalConfirmation
        title='Eliminar producto'
        description='¿Estás seguro de que quieres eliminar este producto?'
        open={openModalConfirmation}
        setOpenModal={setOpenModalConfirmation}
        pressConfirmation={() => actionDeleteProduct()} />
    </div>
  );
};

export default ProductCard;