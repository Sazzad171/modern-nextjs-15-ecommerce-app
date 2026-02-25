import { ProductItemCard } from '@/components/product/ProductItem';
import { productsData } from '@/lib/data';

export default function ProductsList() {
  return (
    <div className="md:col-span-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-6">
        {productsData?.map((product) => (
          <ProductItemCard product={product} key={product.id} imageHeightClass="h-60" />
        ))}
      </div>
    </div>
  );
}
