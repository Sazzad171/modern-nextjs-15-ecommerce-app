import { PAGE_ROUTES } from '@/lib/constants/page-routes';
import { topFeatures } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturesCategories() {
  return (
    <section className="section-gap">
      <div className="site-container">
        <h2 className="mb-4 text-2xl font-bold">Updated with Latest Technologies</h2>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {topFeatures?.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-gray-50 bg-white"
            >
              <Link href={PAGE_ROUTES.PRODUCTS} className="flex h-full flex-col justify-between">
                <div className="p-2">
                  <div className="relative mb-1 h-50 w-full overflow-hidden">
                    <Image
                      src={item?.imgURL}
                      alt="offer image"
                      fill
                      className="object-cover transition-all group-hover:scale-105"
                    />
                  </div>
                  <h5 className="py-2 text-center text-sm font-medium">{item?.title}</h5>
                </div>
                <div className="bg-primary">
                  <h5 className="py-1 text-center text-lg font-semibold text-white">
                    {item?.category}
                  </h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
