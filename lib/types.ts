export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  brands: string[];
  search: string;
}