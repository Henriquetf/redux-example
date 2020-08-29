import React, { useState, useEffect } from 'react';

import { Product } from '../store/modules/cart/types';
import { getProducts } from '../services/api/products';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<Product[]>([]);

  useEffect(() => {
    void getProducts().then((products) => {
      setCatalog(products);
    });
  }, []);

  return (
    <main>
      {catalog.map((product) => (
        <article key={product.id}>
          <strong>{product.title}</strong>
          <span>
            {' - '}
            {product.price}
          </span>

          <button type="button">Comprar</button>
        </article>
      ))}
    </main>
  );
};

export default Catalog;
