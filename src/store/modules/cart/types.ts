export interface Product {
  id: number;
  title: string;
  price: number;
}

export interface CartItem {
  product: Product;
  amount: number;
}

export interface CartState {
  items: CartItem[];
}

export interface ProductStock {
  id: number;
  quantity: number;
}
