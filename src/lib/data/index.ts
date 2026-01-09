import { ProductItemTypes } from '@/features/product/product.types';
import { ImageTypes } from '@/types';

// Home banner image
export const homeBannerImageData: ImageTypes = [
  {
    imageURL: '/images/home/main-banner.webp',
    alt: 'Main Banner 1',
  },
  {
    imageURL: '/images/home/sub-banner.webp',
    alt: 'Main Banner 2',
  },
  {
    imageURL: '/images/home/sub-banner-2.jpg',
    alt: 'Main Banner 3',
  },
];

// Home featuers
export const homeFeatures: ImageTypes = [
  {
    imageURL: '/images/home/features-1.png',
    alt: 'Feature 1',
    title: 'Official Product',
  },
  {
    imageURL: '/images/home/features-2.png',
    alt: 'Feature 2',
    title: 'Authorised Seller',
  },
  {
    imageURL: '/images/home/features-3.png',
    alt: 'Feature 3',
    title: 'Exchange',
  },
  {
    imageURL: '/images/home/features-4.png',
    alt: 'Feature 4',
    title: 'Fastest Delivery',
  },
  {
    imageURL: '/images/home/features-5.png',
    alt: 'Feature 5',
    title: '100% Secure Payment',
  },
];

// Home featured categories
export const homeFeaturedCategories: ImageTypes = [
  {
    imageURL: '/images/home/ft-categories/1.png',
    alt: 'Category 1',
    title: 'Router',
  },
  {
    imageURL: '/images/home/ft-categories/2.png',
    alt: 'Category 2',
    title: 'Camera',
  },
  {
    imageURL: '/images/home/ft-categories/3.png',
    alt: 'Category 3',
    title: 'Earbuds & Headphones',
  },
  {
    imageURL: '/images/home/ft-categories/4.png',
    alt: 'Category 4',
    title: 'Smart Watches',
  },
  {
    imageURL: '/images/home/ft-categories/5.png',
    alt: 'Category 5',
    title: 'Drone',
  },
  {
    imageURL: '/images/home/ft-categories/6.png',
    alt: 'Category 6',
    title: 'Speakers',
  },
  {
    imageURL: '/images/home/ft-categories/7.png',
    alt: 'Category 7',
    title: 'Gaming',
  },
  {
    imageURL: '/images/home/ft-categories/8.png',
    alt: 'Category 8',
    title: 'Charger & Cables',
  },
  {
    imageURL: '/images/home/ft-categories/3.png',
    alt: 'Category 3',
    title: 'Router',
  },
];

// All product items
export const productsData: ProductItemTypes[] = [
  {
    id: 1,
    name: 'iPhone 14 Pro',
    price: 999.99,
    image: '/images/products/1.webp',
    category: 'Smartphones',
    storage: '128GB',
    color: 'Space Black',
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    price: 1199.99,
    image: '/images/products/2.webp',
    category: 'Smartphones',
    storage: '256GB',
    color: 'Natural Titanium',
  },
  {
    id: 3,
    name: 'iPhone 16 Pro',
    price: 1299.99,
    image: '/images/products/3.webp',
    category: 'Smartphones',
    storage: '512GB',
    color: 'Desert Titanium',
  },
  {
    id: 4,
    name: 'iPhone 16',
    price: 1799.99,
    image: '/images/products/1.webp',
    category: 'Smartphones',
    storage: '512GB',
    color: 'Desert Titanium',
  },
  {
    id: 5,
    name: 'iPhone 15 Pro',
    price: 1199.99,
    image: '/images/products/2.webp',
    category: 'Smartphones',
    storage: '256GB',
    color: 'Natural Titanium',
  },
  {
    id: 6,
    name: 'iPhone 15 Pro',
    price: 1199.99,
    image: '/images/products/4.jpeg',
    category: 'Smartphones',
    storage: '256GB',
    color: 'Natural Titanium',
  },
  {
    id: 7,
    name: 'iPhone 16 Pro',
    price: 1299.99,
    image: '/images/products/5.jpeg',
    category: 'Smartphones',
    storage: '512GB',
    color: 'Desert Titanium',
  },
  {
    id: 8,
    name: 'iPhone 16',
    price: 1799.99,
    image: '/images/products/6.jpeg',
    category: 'Smartphones',
    storage: '512GB',
    color: 'Desert Titanium',
  },
  {
    id: 9,
    name: 'iPhone 15 Pro',
    price: 1199.99,
    image: '/images/products/7.jpeg',
    category: 'Smartphones',
    storage: '256GB',
    color: 'Natural Titanium',
  },
];
