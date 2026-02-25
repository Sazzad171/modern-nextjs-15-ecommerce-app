export default function TopCategories() {
  return (
    <section className="section-gap bg-white">
      <div className="site-container">
        <div className="mb-4 flex items-baseline justify-between gap-3 border-b-2 border-gray-300 pb-3 md:mb-10">
          <div>
            <h2 className="text-center text-2xl font-bold">Top Categories</h2>
          </div>
          <div>
            <p>
              <Link href={PAGE_ROUTES.PRODUCTS} className="text-primary font-medium">
                See All Categories
              </Link>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 lg:grid-cols-8">
          {topCategories?.map((item, index) => (
            <Link href={PAGE_ROUTES.PRODUCTS} key={index}>
              <div className="group">
                <Image
                  src={item?.imageURL}
                  alt={item?.alt}
                  height={40}
                  width={40}
                  className="mx-auto object-contain transition-all group-hover:scale-95"
                />
                <h4 className="mt-3 text-center text-sm font-semibold">{item?.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
