import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  storage?: string;
  color?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 14 Pro',
    price: 999.99,
    image: '/images/products/1.webp',
    category: 'Smartphones',
    storage: '128GB',
    color: 'Space Black',
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    price: 1199.99,
    image: '/images/products/2.webp',
    category: 'Smartphones',
    storage: '256GB',
    color: 'Natural Titanium',
  },
  {
    id: 3,
    name: 'iPhone 16 Pro',
    price: 1299.99,
    image: '/images/products/3.webp',
    category: 'Smartphones',
    storage: '512GB',
    color: 'Desert Titanium',
  },
  {
    id: 4,
    name: 'iPhone 16',
    price: 1799.99,
    image: '/images/products/2.webp',
    category: 'Smartphones',
    storage: '512GB',
    color: 'Desert Titanium',
  },
];

export default function Home() {
  return (
    <>
      {/* banner */}
      <section>
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="">
                <Image
                  src={'/images/home/main-banner.webp'}
                  alt="Company Logo"
                  width={1500}
                  height={800}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="md:col-span-4">
              <Image
                src={'/images/home/sub-banner.webp'}
                alt="Company Logo"
                width={1500}
                height={800}
                className="mb-2 rounded-xl"
              />
              <Image
                src={'/images/home/sub-banner-2.jpg'}
                alt="Company Logo"
                width={1500}
                height={700}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* product list */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-center text-3xl font-bold">Featured Products</h1>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group rounded-xl border-2 border-red-500 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-800"
              >
                {/* Product Image */}
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-red-500 px-3 py-1 text-xs text-white">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-800 dark:text-white">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-red-600">${product.price}</span>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Free Shipping</p>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-red-700">
                      Add to Cart
                    </button>
                  </div>

                  {/* Rating */}
                  <div className="mt-4 flex items-center">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(4)}
                      <span className="text-gray-300">★</span>
                    </div>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      (128 reviews)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* product list */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-center text-3xl font-bold">New Arrival</h1>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group rounded-xl border-2 border-red-500 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-800"
              >
                {/* Product Image */}
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-red-500 px-3 py-1 text-xs text-white">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-800 dark:text-white">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-red-600">${product.price}</span>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Free Shipping</p>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-red-700">
                      Add to Cart
                    </button>
                  </div>

                  {/* Rating */}
                  <div className="mt-4 flex items-center">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(4)}
                      <span className="text-gray-300">★</span>
                    </div>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      (128 reviews)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* site description */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-2xl font-semibold">
            Leading Computer, Laptop & Gaming PC Retail & Online Shop in Bangladesh
          </h2>
          <p className="text-gray-700">
            Technology has become a part of our daily lives, and we depend on tech products daily
            for a vast portion of our lives. There is hardly a home in Bangladesh without a tech
            product. This is where we come in. Star Tech Ltd. started as a Tech Product Shop in
            March 2007. We focus on giving the best customer service in Bangladesh, following our
            motto of “Customer Comes First.” This is why Star Tech is the most trusted computer shop
            in Bangladesh today, capturing the loyalty of a large customer base. After a long
            16-year journey, Star Tech Ltd. was certified with the renowned "ISO 9001:2015
            certification" as a recognition for the best Quality Control Management System. As an
            ISO-certified organization, Star Tech Ltd. is now up to the international standards that
            specify a Quality Management System (QMS). This Certification denotes that the
            organization strictly maintains all sorts of regulatory requirements to provide
            customers with products and services of a global standard.
          </p>
        </div>
      </section>
    </>
  );
}
