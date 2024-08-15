import React, { useEffect, useState } from 'react';
import './ProductCard.css';
import notFoundImage from '../../../assets/img/Image-not-found.png';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Product } from '../../../models/interface';

const ProductCard = (props: Product) => {

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    setProduct(props);
  },[props])

  if (!product) {
    return null
  }

  return (
    <div className="product-card">
      <div className="product-image-container">

        <img src={product.image ? product.image : notFoundImage} alt="" />
      </div>
      <h2 className="product-title">{product.name}</h2>
      <p className="product-description">{product.description}</p>


      <div className="product-footer">
        <span className="product-price">${parseFloat(product.price)}</span>
        <button className="favorite-button">
          {
            product.favorite ? <MdFavorite style={{fontSize: '20px', color: 'red'}}/> :
             <MdFavoriteBorder style={{fontSize: '20px'}}/>
            
          }
        </button>

      </div>


    </div>
  );
};

export default ProductCard;