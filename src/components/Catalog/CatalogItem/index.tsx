import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addProductToCartRequest } from '../../../store/modules/cart/actions';
import { Product } from '../../../store/modules/cart/types';
import { State } from '../../../store/modules/rootReducer';

import styles from './CatalogItem.module.css';

interface CatalogItemProps {
  product: Product;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const isOutOfStock = useSelector<State, boolean>(
    (state) => state.cart.outOfStockProducts.includes(product.id),
  );

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

      {isOutOfStock && <span className={styles.outOfStock}>Out of stock</span>}
    </article>
  );
};

export default CatalogItem;
