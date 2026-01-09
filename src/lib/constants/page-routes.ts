export const PAGE_ROUTES = {
  HOME: '/',
  PROFILE: '/my-account',
  PRODUCTS: '/products',
  PRODUCT_DETAILS: '/product-details',
  PRODUCT: (id: string) => `/products/${id}`,
  CART: '/cart',
  CHECKOUT: '/checkout',
  LOGOUT: '/logout',
} as const;

export type RouteKeys = keyof typeof PAGE_ROUTES;
