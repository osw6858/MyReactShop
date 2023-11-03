//api로 받아온 데이터 타입 정의

export interface Rating {
  count: number;
  rate: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export type ProductList = Product[];
