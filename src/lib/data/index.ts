import { ProductItemTypes } from '@/features/product/product.types';
import { ImageTypes } from '@/types';
import { PAGE_ROUTES } from '../constants/page-routes';

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
    imageURL: '/images/home/ft-1.png',
    alt: 'Feature 1',
    title: 'Official Product',
  },
  {
    imageURL: '/images/home/ft-2.png',
    alt: 'Feature 2',
    title: 'Authorised Seller',
  },
  {
    imageURL: '/images/home/ft-3.png',
    alt: 'Feature 3',
    title: 'Exchange',
  },
  {
    imageURL: '/images/home/ft-4.png',
    alt: 'Feature 4',
    title: 'Fastest Delivery',
  },
  {
    imageURL: '/images/home/ft-5.png',
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
    imageURL: '/images/home/ft-categories/4.png',
    alt: 'Category 4',
    title: 'Smart Watches',
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

// Top categories
export const topCategories: ImageTypes = [
  {
    imageURL: '/images/category-icons/cyber-security.png',
    alt: 'Category 1',
    title: 'CCTV & SECURITY SYSTEMS',
  },
  {
    imageURL: '/images/category-icons/electronics.png',
    alt: 'Category 2',
    title: 'ELECTRONIC & HOME APPLIANCE',
  },
  {
    imageURL: '/images/category-icons/robot.png',
    alt: 'Category 3',
    title: 'ROBOTICS',
  },
  {
    imageURL: '/images/category-icons/server.png',
    alt: 'Category 4',
    title: 'SERVER & TELECOMMUNICATION',
  },
  {
    imageURL: '/images/category-icons/wire.png',
    alt: 'Category 5',
    title: 'NETWORKING CABLE',
  },
  {
    imageURL: '/images/category-icons/http.png',
    alt: 'Category 6',
    title: 'INTERNET & NETWORKING',
  },
  {
    imageURL: '/images/category-icons/cyber-security.png',
    alt: 'Category 1',
    title: 'CCTV & SECURITY SYSTEMS',
  },
  {
    imageURL: '/images/category-icons/electronics.png',
    alt: 'Category 2',
    title: 'ELECTRONIC & HOME APPLIANCE',
  },
];

// All product items
export const productsData: ProductItemTypes[] = [
  {
    id: 1,
    name: 'iPhone 14 Pro',
    price: 999.99,
    discount: 1,
    image: '/images/products/1.webp',
    category: 'Smartphones',
    storage: '128GB',
    color: 'Space Black',
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    price: 1199.99,
    discount: 7,
    image: '/images/products/2.webp',
    category: 'Smartphones',
    storage: '256GB',
    color: 'Natural Titanium',
  },
  {
    id: 3,
    name: 'iPhone 16 Pro',
    price: 1299.99,
    discount: 3,
    image: '/images/products/3.webp',
    category: 'Smartphones',
    storage: '512GB',
    color: 'Desert Titanium',
  },
  {
    id: 4,
    name: 'iPhone 16',
    price: 1799.99,
    discount: 5,
    image: '/images/products/1.webp',
    category: 'Smartphones',
    storage: '512GB',
    color: 'Desert Titanium',
  },
  {
    id: 5,
    name: 'iPhone 15 Pro',
    price: 1199.99,
    discount: 7,
    image: '/images/products/2.webp',
    category: 'Smartphones',
    storage: '256GB',
    color: 'Natural Titanium',
  },
  {
    id: 6,
    name: 'iPhone 15 Pro',
    price: 1199.99,
    discount: 8,
    image: '/images/products/4.jpeg',
    category: 'Smartphones',
    storage: '256GB',
    color: 'Natural Titanium',
  },
  {
    id: 7,
    name: 'iPhone 16 Pro',
    price: 1299.99,
    discount: 3,
    image: '/images/products/5.jpeg',
    category: 'Smartphones',
    storage: '512GB',
    color: 'Desert Titanium',
  },
  {
    id: 8,
    name: 'iPhone 16',
    price: 1799.99,
    discount: 4,
    image: '/images/products/6.jpeg',
    category: 'Smartphones',
    storage: '512GB',
    color: 'Desert Titanium',
  },
  {
    id: 9,
    name: 'iPhone 15 Pro',
    price: 1199.99,
    discount: 2,
    image: '/images/products/7.jpeg',
    category: 'Smartphones',
    storage: '256GB',
    color: 'Natural Titanium',
  },
];

// Menu categories
export const menuCategories = [
  {
    id: 'laptop',
    name: 'Laptop',
    subcategories: [
      { id: 'gaming-laptop', name: 'Gaming Laptop', href: PAGE_ROUTES.PRODUCTS },
      { id: 'business-laptop', name: 'Business Laptop', href: PAGE_ROUTES.PRODUCTS },
      { id: 'student-laptop', name: 'Student Laptop', href: PAGE_ROUTES.PRODUCTS },
    ],
  },
  {
    id: 'desktop',
    name: 'Desktop',
    subcategories: [
      { id: 'all-in-one', name: 'All-in-One PC', href: PAGE_ROUTES.PRODUCTS },
      { id: 'gaming-desktop', name: 'Gaming Desktop', href: PAGE_ROUTES.PRODUCTS },
    ],
  },
  {
    id: 'monitor-ups',
    name: 'Monitor & UPS',
    subcategories: [
      { id: 'led-monitor', name: 'LED Monitor', href: PAGE_ROUTES.PRODUCTS },
      { id: 'gaming-monitor', name: 'Gaming Monitor', href: PAGE_ROUTES.PRODUCTS },
      { id: 'ups', name: 'UPS', href: PAGE_ROUTES.PRODUCTS },
    ],
  },
  {
    id: 'projector-speaker',
    name: 'Projector & Speaker',
    subcategories: [
      { id: 'projector', name: 'Projector', href: PAGE_ROUTES.PRODUCTS },
      { id: 'bluetooth-speaker', name: 'Bluetooth Speaker', href: PAGE_ROUTES.PRODUCTS },
    ],
  },
  {
    id: 'microphone-speaker',
    name: 'Microphone & Speaker',
    subcategories: [
      { id: 'wireless-mic', name: 'Wireless Microphone', href: PAGE_ROUTES.PRODUCTS },
      { id: 'conference-speaker', name: 'Conference Speaker', href: PAGE_ROUTES.PRODUCTS },
    ],
  },
  {
    id: 'printer-toner',
    name: 'Printer & Toner',
    subcategories: [
      { id: 'laser-printer', name: 'Laser Printer', href: PAGE_ROUTES.PRODUCTS },
      { id: 'inkjet-printer', name: 'Inkjet Printer', href: PAGE_ROUTES.PRODUCTS },
      { id: 'toner-cartridge', name: 'Toner Cartridge', href: PAGE_ROUTES.PRODUCTS },
    ],
  },
  {
    id: 'computer-accessories',
    name: 'Computer Accessories',
    subcategories: [
      { id: 'keyboard', name: 'Keyboard', href: PAGE_ROUTES.PRODUCTS },
      { id: 'mouse', name: 'Mouse', href: PAGE_ROUTES.PRODUCTS },
      { id: 'webcam', name: 'Webcam', href: PAGE_ROUTES.PRODUCTS },
    ],
  },
  {
    id: 'software',
    name: 'Software',
    subcategories: [
      { id: 'antivirus', name: 'Antivirus', href: PAGE_ROUTES.PRODUCTS },
      { id: 'operating-system', name: 'Operating System', href: PAGE_ROUTES.PRODUCTS },
    ],
  },
  {
    id: 'internet-networking',
    name: 'Internet & Networking',
    subcategories: [
      { id: 'router', name: 'Router', href: PAGE_ROUTES.PRODUCTS },
      { id: 'wifi-extender', name: 'WiFi Extender', href: PAGE_ROUTES.PRODUCTS },
    ],
  },
  {
    id: 'server-telecommunication',
    name: 'Server & Telecommunication',
    subcategories: [
      { id: 'rack-server', name: 'Rack Server', href: PAGE_ROUTES.PRODUCTS },
      { id: 'ip-phone', name: 'IP Phone', href: PAGE_ROUTES.PRODUCTS },
    ],
  },
  {
    id: 'networking-cable',
    name: 'Networking Cable',
    subcategories: [
      { id: 'cat6-cable', name: 'CAT6 Cable', href: PAGE_ROUTES.PRODUCTS },
      { id: 'fiber-cable', name: 'Fiber Optic Cable', href: PAGE_ROUTES.PRODUCTS },
    ],
  },
  {
    id: 'networking-accessories',
    name: 'Networking Accessories',
    subcategories: [
      { id: 'patch-panel', name: 'Patch Panel', href: PAGE_ROUTES.PRODUCTS },
      { id: 'network-switch', name: 'Network Switch', href: PAGE_ROUTES.PRODUCTS },
    ],
  },
  {
    id: 'cctv-security',
    name: 'CCTV & Security Systems',
    subcategories: [
      { id: 'dome-camera', name: 'Dome Camera', href: PAGE_ROUTES.PRODUCTS },
      { id: 'nvr', name: 'NVR', href: PAGE_ROUTES.PRODUCTS },
    ],
  },
  {
    id: 'electronics-home-appliance',
    name: 'Electronics & Home Appliance',
    subcategories: [
      { id: 'smart-tv', name: 'Smart TV', href: PAGE_ROUTES.PRODUCTS },
      { id: 'home-theater', name: 'Home Theater', href: PAGE_ROUTES.PRODUCTS },
    ],
  },
  {
    id: 'gadget-item',
    name: 'Gadget Item',
    subcategories: [
      { id: 'power-bank', name: 'Power Bank', href: PAGE_ROUTES.PRODUCTS },
      { id: 'mobile-accessory', name: 'Mobile Accessory', href: PAGE_ROUTES.PRODUCTS },
    ],
  },
  {
    id: 'digital-product',
    name: 'Digital Product',
    subcategories: [
      { id: 'software-license', name: 'Software License', href: PAGE_ROUTES.PRODUCTS },
      { id: 'digital-subscription', name: 'Digital Subscription', href: PAGE_ROUTES.PRODUCTS },
    ],
  },
];

export const bannerImages = [
  '/images/home/banner/5.jpg',
  '/images/home/banner/6.jpg',
  '/images/home/banner/3.jpg',
  '/images/home/banner/4.jpg',
  '/images/home/banner/1.jpg',
  '/images/home/banner/2.jpg',
];

export const brands = [
  '/images/brands/1.png',
  '/images/brands/2.jpg',
  '/images/brands/3.jpg',
  '/images/brands/4.png',
  '/images/brands/5.png',
  '/images/brands/2.jpg',
  '/images/brands/1.png',
  '/images/brands/4.png',
  '/images/brands/5.png',
  '/images/brands/1.png',
  '/images/brands/4.png',
  '/images/brands/3.jpg',
  '/images/brands/2.jpg',
  '/images/brands/5.png',
  '/images/brands/4.png',
  '/images/brands/3.jpg',
  '/images/brands/4.png',
  '/images/brands/5.png',
  '/images/brands/2.jpg',
  '/images/brands/1.png',
  '/images/brands/4.png',
  '/images/brands/5.png',
  '/images/brands/1.png',
  '/images/brands/4.png',
];

export const hotDeals = [
  { imgURL: '/images/hot-deals/1.jpg', title: 'Smart Watch' },
  { imgURL: '/images/hot-deals/2.jpg', title: 'Air Fryer' },
  { imgURL: '/images/hot-deals/3.jpg', title: 'Smart Phones' },
  { imgURL: '/images/hot-deals/4.jpg', title: 'Drone & Airflys' },
  { imgURL: '/images/hot-deals/4.jpg', title: 'Drone & Airflys' },
  { imgURL: '/images/hot-deals/3.jpg', title: 'Smart Phones' },
  { imgURL: '/images/hot-deals/2.jpg', title: 'Air Fryer' },
  { imgURL: '/images/hot-deals/1.jpg', title: 'Smart Watch' },
];

export const memberOf = [
  '/images/member-of/1.png',
  '/images/member-of/2.jpg',
  '/images/member-of/3.jpg',
  '/images/member-of/4.jpg',
];

export const topFeatures = [
  { imgURL: '/images/hot-deals/1.jpg', category: 'Smart Watch', title: 'CMF Watch Pro 2' },
  { imgURL: '/images/hot-deals/2.jpg', category: 'Air Fryer', title: 'Philips 4.2 Litr Air Fryer' },
  { imgURL: '/images/hot-deals/3.jpg', category: ' One Plus Nord 5 0% EMI', title: 'Smart Phones' },
  {
    imgURL: '/images/hot-deals/4.jpg',
    category: 'Drone & Airflys',
    title: 'Drone from TK BDT 1300+',
  },
  {
    imgURL: '/images/hot-deals/5.jpg',
    category: 'Top Brands | 1 Year Waranty',
    title: 'CMF Watch Pro 2',
  },
];
