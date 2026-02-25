import { PAGE_ROUTES } from '@/lib/constants/page-routes';
import { brands } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function OurBrands() {
  return (
    <section className="section-gap">
      <div className="site-container">
        <div className="mb-4 flex items-baseline justify-between gap-3">
          <div>
            <h2 className="text-center text-2xl font-bold">Top Brands</h2>
          </div>
          <div>
            <p>
              <Link href={PAGE_ROUTES.PRODUCTS} className="border-primary border-b-2 pb-1">
                View More
              </Link>
            </p>
          </div>
        </div>

        <div className="border bg-white">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-12">
            {brands.map((src, index) => (
              <div
                key={index}
                className="group flex items-center justify-center border p-4 transition"
              >
                <Image
                  src={src}
                  alt="Brand Logo"
                  width={120}
                  height={60}
                  className="object-contain transition group-hover:scale-95"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
