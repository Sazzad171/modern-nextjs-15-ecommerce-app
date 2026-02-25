'use client';

import ProductsFilterBox from '@/components/sections/products/filter-box';
import ProductsList from '@/components/sections/products/product-list';

const ProductList = () => {
  return (
    <section className="py-4">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
          <ProductsFilterBox />
          <ProductsList />
        </div>
      </div>
    </section>
  );
};

export default ProductList;
