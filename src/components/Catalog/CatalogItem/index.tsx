import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { addProductToCartRequest } from '../../../store/modules/cart/actions';
import { Product } from '../../../store/modules/cart/types';

import styles from './CatalogItem.module.css';

interface CatalogItemProps {
  product: Product
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article className={styles.product}>
      <strong>{product.title}</strong>
      <span>
        {' - '}
        {product.price}
      </span>

      <button
        className={styles.button}
        type="button"
        onClick={handleAddProductToCart}
      >
        Buy
      </button>
    </article>
  );
};

export default CatalogItem;
