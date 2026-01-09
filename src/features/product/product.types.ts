export interface ProductItemTypes {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  storage?: string;
  color?: string;
  discount?: number;
}

export interface ProductItemProps {
  product: ProductItemTypes;
  className?: string;
  showCategory?: boolean;
  imageHeightClass?: string;
}
