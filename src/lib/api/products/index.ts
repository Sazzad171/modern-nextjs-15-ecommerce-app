import { ApiResponse } from '@/types';
import { apiFetch } from '../client';
import { Product } from '@/types/product';

export async function getProducts(params: { page?: number; category?: string; search?: string }) {
  return apiFetch('/products', {
    params,
  });
}

export async function getProduct(id: string) {
  return apiFetch<ApiResponse<Product>>(`/products/${id}`);
}
