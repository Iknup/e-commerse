export interface Item {
  name: string;
  id: string;
  images: string[];
  description: string;
  detail: string;
  price: number;
  color: string[];
  review?: { rating: number; user: string; review: string; id: string }[];
  size: string[];
  hashtag?: string[];
}

export interface cartItemObject {
  productId: string;
  id: string;
  color: string;
  size: string;
  quantity: number;
}
