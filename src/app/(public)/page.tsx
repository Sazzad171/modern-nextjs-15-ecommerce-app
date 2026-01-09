'use client';

import { ProductItemCard } from '@/components/product/ProductItem';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { PAGE_ROUTES } from '@/lib/constants/page-routes';
import {
  homeBannerImageData,
  homeFeaturedCategories,
  homeFeatures,
  productsData,
} from '@/lib/data';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function Home() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  return (
    <>
      {/* Banner */}
      <section>
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            <div className="md:col-span-8">
              <Carousel
                plugins={[plugin.current]}
                className="w-full"
                opts={{
                  loop: true,
                  dragFree: false,
                }}
              >
                <CarouselContent>
                  {homeBannerImageData.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-1500/810 w-full overflow-hidden rounded-xl bg-gray-50">
                        <Image
                          src={image.imageURL}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 80vw"
                          priority={index === 0}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* No arrows or dots included */}
              </Carousel>
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

      {/* Product list */}
      <section className="section-gap">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Featured Products</h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {productsData.map((product) => (
              <ProductItemCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section-gap bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Featured Categories</h2>

          <div className="flex flex-wrap items-center justify-center gap-y-4">
            {homeFeaturedCategories?.map((categoryItem, index) => (
              <div className="px-2 lg:px-4" key={index}>
                <Link href={PAGE_ROUTES?.PRODUCTS}>
                  <Image
                    src={categoryItem?.imageURL}
                    alt={categoryItem?.alt}
                    width={132}
                    height={132}
                    className="mx-auto object-contain"
                  />
                  <h5 className="text text-center font-medium">{categoryItem?.title}</h5>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product list */}
      <section className="section-gap">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">New Arrival</h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {productsData.map((product) => (
              <ProductItemCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-gap bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 items-stretch md:grid-cols-3 lg:grid-cols-5">
            {homeFeatures?.map((featureItem, index) => (
              <div
                className="flex items-center justify-center gap-4 border-r border-gray-200 px-2 last:border-0"
                key={index}
              >
                <Image
                  src={featureItem?.imageURL}
                  alt={featureItem?.alt}
                  width={36}
                  height={36}
                  className="object-contain"
                />
                <h5 className="text-xl font-medium">{featureItem?.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product list */}
      <section className="section-gap">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">All Products</h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {productsData.map((product) => (
              <ProductItemCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>

      {/* Site description */}
      <section className="section-gap bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-4 lg:mb-6">
            <h1 className="mb-4 text-2xl font-semibold">
              Leading Computer, Laptop & Gaming PC Retail & Online Shop in Bangladesh
            </h1>
            <p className="text-gray-700">
              Technology has become a part of our daily lives, and we depend on tech products daily
              for a vast portion of our lives. There is hardly a home in Bangladesh without a tech
              product. This is where we come in. Star Tech Ltd. started as a Tech Product Shop in
              March 2007. We focus on giving the best customer service in Bangladesh, following our
              motto of “Customer Comes First.” This is why Star Tech is the most trusted computer
              shop in Bangladesh today, capturing the loyalty of a large customer base. After a long
              16-year journey, Star Tech Ltd. was certified with the renowned "ISO 9001:2015
              certification" as a recognition for the best Quality Control Management System. As an
              ISO-certified organization, Star Tech Ltd. is now up to the international standards
              that specify a Quality Management System (QMS). This Certification denotes that the
              organization strictly maintains all sorts of regulatory requirements to provide
              customers with products and services of a global standard.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold">Best Online Gadget Shop in Bangladesh</h2>
            <p className="text-gray-700">
              ITBazar is the most premium and multi-branded retailer in Bangladesh. Our services are
              not only limited to the physical outlets. With our fully operational e-commerce
              platform, our valued customers can now enjoy the same dependable and time-tested
              services we have consistently provided, conveniently and seamlessly online. They can
              also enjoy nationwide delivery once they purchase anything from our websites, and earn
              reward points. This reward point is an example of the loyalty and how much ITBazar
              care customers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
