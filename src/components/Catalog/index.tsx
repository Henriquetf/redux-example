import React, { useState, useEffect, useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { Product } from '../../store/modules/cart/types';
import { getProducts } from '../../services/api/products';
import { addProductToCart } from '../../store/modules/cart/actions';

import styles from './Catalog.module.css';

const Catalog: React.FC = () => {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<Product[]>([]);

  useEffect(() => {
    void getProducts().then((products) => {
      setCatalog(products);
    });
  }, []);

  const handleAddProductToCart = useCallback((product: Product) => {
    dispatch(addProductToCart(product));
  }, [dispatch]);

  return (
    <main className={styles.productContainer}>
      {catalog.map((product) => (
        <article key={product.id} className={styles.product}>
          <strong>{product.title}</strong>
          <span>
            {' - '}
            {product.price}
          </span>

          <button
            className={styles.button}
            type="button"
            onClick={() => handleAddProductToCart(product)}
          >
            Buy
          </button>
        </article>
      ))}
    </main>
  );
};

export default Catalog;
