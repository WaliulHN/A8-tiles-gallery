export interface Tile {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "ceramic" | "porcelain" | "marble" | "mosaic" | "glass";
  price: number;
  currency: "USD" | "EUR" | "GBP";
  dimensions: string;
  material: string;
  inStock: boolean;
  tags?: string[];
  createdAt?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  photoUrl?: string;
  createdAt: string;
}