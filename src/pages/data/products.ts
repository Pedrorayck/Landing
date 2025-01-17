// data/products.ts
export interface Product {
  id: number;
  name: string;
  price: number;
}

export const mockProducts: Product[] = [
  { id: 1, name: 'Produto 1', price: 20.0 },
  { id: 2, name: 'Produto 2', price: 30.0 },
];