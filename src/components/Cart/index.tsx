import React from 'react';
import { useSelector } from 'react-redux';

import { State } from '../../store';
import { CartItem } from '../../store/modules/cart/types';
import formatCurrency from '../../utils/formatCurrency';

import styles from './Cart.module.scss';

const Cart: React.FC = () => {
  const cart = useSelector<State, CartItem[]>((state) => state.cart.items);

  return (
    <section className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(({ product, quantity }) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{quantity}</td>
              <td>{formatCurrency(quantity * product.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Cart;
