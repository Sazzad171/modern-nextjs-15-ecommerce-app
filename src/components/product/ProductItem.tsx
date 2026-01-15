import { ProductItemProps } from '@/features/product/product.types';
import { PAGE_ROUTES } from '@/lib/constants/page-routes';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function ProductItemCard({
  product,
  className,
  showCategory = true,
  imageHeightClass = 'h-58',
}: ProductItemProps) {
  return (
    <div
      className={cn(
        'group rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-800',
        className
      )}
    >
      {/* Product Image */}
      <div className={cn('relative w-full overflow-hidden rounded-t-lg', imageHeightClass)}>
        <Link href={PAGE_ROUTES?.PRODUCT_DETAILS}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </Link>

        {/* Category Badge */}
        {showCategory && (
          <div className="absolute top-3 left-3">
            <span className="rounded-full bg-gray-600 px-3 py-1 text-xs font-medium text-white">
              {product.category}
            </span>
          </div>
        )}

        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-10 left-3">
            <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
              -{product.discount}%
            </span>
          </div>
        )}

        {/* Wishlist Badge */}
        <div className="invisible absolute top-3 right-3 translate-x-2 opacity-0 transition-all duration-600 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
          <button className="bg-primary rounded-full p-2 text-white">
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="px-3 pb-4">
        <Link href={PAGE_ROUTES?.PRODUCT_DETAILS}>
          <h3 className="mb-1 line-clamp-2 text-center text-lg font-medium text-gray-800 dark:text-white">
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="mb-3 flex items-center justify-center gap-2">
          <span className="text-primary text-lg font-bold">${product.price.toFixed(2)}</span>
          {product?.discount && (
            <span className="text-sm text-gray-500 line-through">
              ${((product.price * 100) / (100 - product?.discount)).toFixed(2)}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-2">
          <button className="w-full rounded-sm bg-gray-600/20 px-3 py-1 text-sm font-medium transition-colors duration-200 hover:bg-gray-600 hover:text-white">
            Add to Cart
          </button>

          {/* Add to Cart Button */}
          <button className="bg-primary/20 hover:bg-primary text-primary w-full rounded-sm px-3 py-1 text-sm font-medium transition-colors duration-200 hover:text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
