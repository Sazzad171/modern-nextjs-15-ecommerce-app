import CategoryCardItem from '@/components/sections/common/category-card-item';
import { topCategories } from '@/lib/data';

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
              <CategoryCardItem item={item} key={index} />
            ))}
            {topCategories?.map((item, index) => (
              <CategoryCardItem item={item} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CategoryList;
