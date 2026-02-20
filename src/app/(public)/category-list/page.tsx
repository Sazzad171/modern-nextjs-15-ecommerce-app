import { PAGE_ROUTES } from '@/lib/constants/page-routes';
import { topCategories } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

function CategoryList() {
  return (
    <>
      <section className="section-gap bg-white md:py-10!">
        <div className="site-container">
          <h2 className="mb-6 text-center text-2xl font-bold md:mb-16 md:text-3xl">
            Our All Categories
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-x-4 md:gap-y-12 lg:grid-cols-7">
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
    </>
  );
}

export default CategoryList;
