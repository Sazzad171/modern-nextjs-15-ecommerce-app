'use client';

import ProductList from '@/components/sections/common/product-list';
import AdProducts from '@/components/sections/home/ad-products';
import Banner from '@/components/sections/home/banner';
import Features from '@/components/sections/home/features';
import FeaturesCategories from '@/components/sections/home/features-categories';
import HotDeals from '@/components/sections/home/hot-deals';
import Marquee from '@/components/sections/home/marquee';
import MemberOf from '@/components/sections/home/member-of';
import OfferBanner from '@/components/sections/home/offer-banner';
import OurBrands from '@/components/sections/home/our-brands';
import SiteDescription from '@/components/sections/home/site-description';
import SocialIcons from '@/components/sections/home/social-icons';
import TopCategories from '@/components/sections/home/top-categories';

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Banner */}

      {/* Marquee notice */}
      <Marquee />

      {/* Features */}
      <Features />

      {/* Featured Categories */}
      {/* <section className="section-gap">
        <div className="site-container">
          <h2 className="mb-8 text-center text-3xl font-bold">Featured Categories</h2>

          <div className="flex flex-wrap items-center justify-center gap-y-4">
            {homeFeaturedCategories?.map((categoryItem, index) => (
              <div className="group px-2 lg:px-4" key={index}>
                <Link href={PAGE_ROUTES?.PRODUCTS}>
                  <div className="mx-auto w-[132px] rounded-full bg-white">
                    <Image
                      src={categoryItem?.imageURL}
                      alt={categoryItem?.alt}
                      width={132}
                      height={132}
                      className="object-contain transition-all group-hover:scale-95"
                    />
                  </div>
                  <h5 className="text text-center font-medium">{categoryItem?.title}</h5>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Product list */}
      <ProductList />

      {/* Top categories */}
      <TopCategories />

      {/* Product list */}
      <ProductList />

      {/* Hot deals card */}
      <HotDeals />

      {/* Banner section */}
      <Banner />

      {/* Product list */}
      <ProductList />

      {/* Features & top categories */}
      <FeaturesCategories />

      {/* Ad products */}
      <AdProducts />

      {/* Offer banner section */}
      <OfferBanner />

      {/* Product list */}
      <ProductList />

      {/* Our brands */}
      <OurBrands />

      {/* Member of */}
      <MemberOf />

      {/* Social icons */}
      <SocialIcons />

      {/* Site description */}
      <SiteDescription />
    </div>
  );
}
