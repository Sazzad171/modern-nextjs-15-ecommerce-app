export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// Common image (Banner/Feature etc.) types
export type ImageType = {
  imageURL: string;
  alt: string;
  title?: string;
};

export type ImageTypes = ImageType[];
