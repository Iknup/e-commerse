export interface Item {
  name: string;
  id: string;
  images: string[];
  description: string;
  detail: string;
  price: number;
  color: string[];
  review?: [{}];
  size: string[];
  hashtag?: string[];
}
