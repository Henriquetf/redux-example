import { ProductStock } from '../../store/modules/cart/types';

import http from './http';
import apiConfig from './config';

export function getProductStock(id: number): Promise<ProductStock> {
  return http<ProductStock>(`${apiConfig.baseUrl}/stock/${id}`);
}
