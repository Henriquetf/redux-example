import { Product } from '../../store/modules/cart/types';

import http from './http';
import apiConfig from './config';

export function getProducts(): Promise<Product[]> {
  return http<Product[]>(`${apiConfig.baseUrl}/products`);
}
