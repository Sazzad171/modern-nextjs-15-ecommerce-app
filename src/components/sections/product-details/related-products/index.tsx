import { ProductItemCard } from '@/components/product/ProductItem';
import { productsData } from '@/lib/data';

export default function RelatedProducts() {
  return (
    <section className="section-gap">
      <div className="site-container">
        <h1 className="mb-8 text-center text-3xl font-bold">Related Products</h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {productsData?.slice(4, 9)?.map((product) => (
            <ProductItemCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
