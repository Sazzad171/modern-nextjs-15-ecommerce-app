export default function ProductList() {
  return (
    <section className="section-gap">
      <div className="site-container">
        <div className="mb-4 flex items-baseline justify-between gap-3">
          <div>
            <h2 className="text-center text-2xl font-bold">Featured Products</h2>
          </div>
          <div>
            <p>
              <Link href={PAGE_ROUTES.PRODUCTS} className="border-primary border-b-2 pb-1">
                View More
              </Link>
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {productsData?.slice(3, 8)?.map((product) => (
            <ProductItemCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
