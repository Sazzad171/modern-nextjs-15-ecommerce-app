import { PAGE_ROUTES } from '@/lib/constants/page-routes';
import { topCategories } from '@/lib/data';
import Link from 'next/link';
import CategoryCardItem from '../../common/product-list/category-card-item';

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
            <CategoryCardItem item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
