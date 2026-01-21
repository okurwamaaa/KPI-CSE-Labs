export interface User {
  id: number;
  email: string;
}

export interface Order {
  id: number;
  userId: number;
  status: string;
  items: OrderItem[];
}

export interface Product {
  id: number;
  price: number;
}

export interface OrderItem {
  productId: number;
  quantity: number;
}