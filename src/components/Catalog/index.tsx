import React, { useState, useEffect } from 'react';

import { Product } from '../../store/modules/cart/types';
import { getProducts } from '../../services/api/products';

import styles from './Catalog.module.css';
import CatalogItem from './CatalogItem';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<Product[]>([]);

  useEffect(() => {
    void getProducts().then((products) => {
      setCatalog(products);
    });
  }, []);

  return (
    <main className={styles.productContainer}>
      {catalog.map((product) => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  );
};

export default Catalog;
