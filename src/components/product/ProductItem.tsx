import { ProductItemProps } from '@/features/product/product.types';
import { PAGE_ROUTES } from '@/lib/constants/page-routes';
import { cn } from '@/lib/utils';
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
        'group rounded-xl border-2 border-red-500 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-800',
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
          <div className="absolute top-3 right-3">
            <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
              -{product.discount}%
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        <Link href={PAGE_ROUTES?.PRODUCT_DETAILS}>
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-800 dark:text-white">
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-red-600">${product.price.toFixed(2)}</span>
            {product?.discount && (
              <span className="text-sm text-gray-500 line-through">
                ${((product.price * 100) / (100 - product?.discount)).toFixed(2)}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button className="rounded-lg bg-red-600 px-3 py-1 text-sm font-medium text-white transition-colors duration-200 hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
