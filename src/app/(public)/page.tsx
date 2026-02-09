'use client';

import { ProductItemCard } from '@/components/product/ProductItem';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { PAGE_ROUTES } from '@/lib/constants/page-routes';
import { homeBannerImageData, homeFeatures, productsData, topCategories } from '@/lib/data';
import Autoplay from 'embla-carousel-autoplay';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import Marquee from 'react-fast-marquee';

const bannerImages = [
  '/images/home/banner/5.jpg',
  '/images/home/banner/6.jpg',
  '/images/home/banner/3.jpg',
  '/images/home/banner/4.jpg',
  '/images/home/banner/1.jpg',
  '/images/home/banner/2.jpg',
];

const brands = [
  '/images/brands/1.png',
  '/images/brands/2.jpg',
  '/images/brands/3.jpg',
  '/images/brands/4.png',
  '/images/brands/5.png',
  '/images/brands/2.jpg',
  '/images/brands/1.png',
  '/images/brands/4.png',
  '/images/brands/5.png',
  '/images/brands/1.png',
  '/images/brands/4.png',
  '/images/brands/3.jpg',
  '/images/brands/2.jpg',
  '/images/brands/5.png',
  '/images/brands/4.png',
  '/images/brands/3.jpg',
  '/images/brands/4.png',
  '/images/brands/5.png',
  '/images/brands/2.jpg',
  '/images/brands/1.png',
  '/images/brands/4.png',
  '/images/brands/5.png',
  '/images/brands/1.png',
  '/images/brands/4.png',
];

const hotDeals = [
  { imgURL: '/images/hot-deals/1.jpg', title: 'Smart Watch' },
  { imgURL: '/images/hot-deals/2.jpg', title: 'Air Fryer' },
  { imgURL: '/images/hot-deals/3.jpg', title: 'Smart Phones' },
  { imgURL: '/images/hot-deals/4.jpg', title: 'Drone & Airflys' },
  { imgURL: '/images/hot-deals/4.jpg', title: 'Drone & Airflys' },
  { imgURL: '/images/hot-deals/3.jpg', title: 'Smart Phones' },
  { imgURL: '/images/hot-deals/2.jpg', title: 'Air Fryer' },
  { imgURL: '/images/hot-deals/1.jpg', title: 'Smart Watch' },
];

const memberOf = [
  '/images/member-of/1.png',
  '/images/member-of/2.jpg',
  '/images/member-of/3.jpg',
  '/images/member-of/4.jpg',
];

const topFeatures = [
  { imgURL: '/images/hot-deals/1.jpg', category: 'Smart Watch', title: 'CMF Watch Pro 2' },
  { imgURL: '/images/hot-deals/2.jpg', category: 'Air Fryer', title: 'Philips 4.2 Litr Air Fryer' },
  { imgURL: '/images/hot-deals/3.jpg', category: ' One Plus Nord 5 0% EMI', title: 'Smart Phones' },
  {
    imgURL: '/images/hot-deals/4.jpg',
    category: 'Drone & Airflys',
    title: 'Drone from TK BDT 1300+',
  },
  {
    imgURL: '/images/hot-deals/5.jpg',
    category: 'Top Brands | 1 Year Waranty',
    title: 'CMF Watch Pro 2',
  },
];

export default function Home() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  return (
    <div className="bg-gray-100">
      {/* Banner */}
      <section className="py-4">
        <div className="site-container">
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

      {/* Marquee notice */}
      <section>
        <div className="site-container">
          <div className="rounded-md bg-gray-200 py-2">
            <Marquee speed={50} pauseOnHover>
              <h5 className="font-medium">
                🔥 Latest Deals: Free Shipping on Orders Over $50! | New Arrivals Just In! | 50% Off
                Summer Sale!
              </h5>
            </Marquee>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-gap">
        <div className="site-container">
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
      <section className="section-gap">
        <div className="site-container">
          <div className="mb-4 flex items-baseline justify-between gap-3">
            <div>
              <h2 className="text-center text-2xl font-bold">Most Popular Products</h2>
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

      {/* Top categories */}
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

      {/* Product list */}
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

      {/* Hot deals card */}
      <div className="section-gap">
        <div className="site-container">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-3 shadow">
              <h2 className="text-lg font-semibold">Wireless Tech</h2>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {hotDeals?.slice(0, 4)?.map((item, index) => (
                  <div className="mb-3" key={index}>
                    <Link href={PAGE_ROUTES?.PRODUCTS}>
                      <div className="group relative mb-1 h-34 w-full overflow-hidden">
                        <Image
                          src={item?.imgURL}
                          alt="offer image"
                          fill
                          className="object-cover transition-all group-hover:scale-105"
                        />
                      </div>
                      <h5 className="text-center text-sm font-medium">{item?.title}</h5>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow">
              <h2 className="text-lg font-semibold">Deals on Top Categories</h2>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {hotDeals?.slice(4, 8)?.map((item, index) => (
                  <div className="mb-3" key={index}>
                    <Link href={PAGE_ROUTES?.PRODUCTS}>
                      <div className="group relative mb-1 h-34 w-full overflow-hidden">
                        <Image
                          src={item?.imgURL}
                          alt="offer image"
                          fill
                          className="object-cover transition-all group-hover:scale-105"
                        />
                      </div>
                      <h5 className="text-center text-sm font-medium">{item?.title}</h5>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow">
              <h2 className="text-lg font-semibold">Wireless Tech</h2>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {hotDeals?.slice(0, 4)?.map((item, index) => (
                  <div className="mb-3" key={index}>
                    <Link href={PAGE_ROUTES?.PRODUCTS}>
                      <div className="group relative mb-1 h-34 w-full overflow-hidden">
                        <Image
                          src={item?.imgURL}
                          alt="offer image"
                          fill
                          className="object-cover transition-all group-hover:scale-105"
                        />
                      </div>
                      <h5 className="text-center text-sm font-medium">{item?.title}</h5>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow">
              <h2 className="text-lg font-semibold">Deals on Top Categories</h2>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {hotDeals?.slice(4, 8)?.map((item, index) => (
                  <div className="mb-3" key={index}>
                    <Link href={PAGE_ROUTES?.PRODUCTS}>
                      <div className="group relative mb-1 h-34 w-full overflow-hidden">
                        <Image
                          src={item?.imgURL}
                          alt="offer image"
                          fill
                          className="object-cover transition-all group-hover:scale-105"
                        />
                      </div>
                      <h5 className="text-center text-sm font-medium">{item?.title}</h5>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner section */}
      <section className="section-gap">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {bannerImages?.slice(0, 2)?.map((bannerItem, index) => (
              <div key={index} className="group relative h-80 w-full overflow-hidden rounded-md">
                <Image
                  src={bannerItem}
                  alt="banner image"
                  fill
                  className="object-cover transition-all group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product list */}
      <section className="section-gap">
        <div className="site-container">
          <div className="mb-4 flex items-baseline justify-between gap-3">
            <div>
              <h2 className="text-center text-2xl font-bold">New Arrival</h2>
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

      {/* Features & top categories */}
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

      {/* Ad products */}
      <section className="section-gap bg-white">
        <div className="site-container">
          <div className="grid grid-cols-2 items-stretch md:grid-cols-3 lg:grid-cols-5">
            {topFeatures?.map((featureItem, index) => (
              <div
                className="flex items-center justify-center gap-4 border-r border-gray-300 px-2 last:border-0"
                key={index}
              >
                <Image
                  src={featureItem?.imgURL}
                  alt={featureItem?.title}
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <h5 className="text-lg font-medium">{featureItem?.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer banner section */}
      <section className="section-gap">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bannerImages?.slice(2, 6)?.map((bannerItem, index) => (
              <div key={index} className="group relative h-74 w-full overflow-hidden rounded-md">
                <Image
                  src={bannerItem}
                  alt="banner image"
                  fill
                  className="object-cover transition-all group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product list */}
      <section className="section-gap">
        <div className="site-container">
          <div className="mb-4 flex items-baseline justify-between gap-3">
            <div>
              <h2 className="text-center text-2xl font-bold">All Products</h2>
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
            {productsData?.slice(4, 9)?.map((product) => (
              <ProductItemCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>

      {/* Our brands */}
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

      {/* Member of */}
      <section className="section-gap bg-orange-100">
        <div className="site-container">
          <div className="grid items-center gap-2 md:grid-cols-2 md:gap-8">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
              <div className="col-span-2">
                <h2 className="mb-2 text-center text-2xl font-semibold">
                  Subscribe To Our NewsLetter
                </h2>
                <Link href="/">
                  <Image
                    src={'/images/home/subscribe.png'}
                    alt="Subscribe Logo"
                    width={160}
                    height={80}
                    className="mx-auto object-contain transition group-hover:scale-105"
                  />
                </Link>
              </div>
              <div className="col-span-1">
                <h4 className="mb-1 text-center text-lg font-semibold">Complain Box</h4>
                <Link href="/">
                  <Image
                    src={'/images/home/complaint.png'}
                    alt="complaint Logo"
                    width={60}
                    height={60}
                    className="mx-auto object-contain transition group-hover:scale-105"
                  />
                </Link>
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-center text-2xl font-bold">We Are Proud Member</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {memberOf?.map((item, index) => (
                  <div
                    className="group relative h-30 w-full overflow-hidden rounded-xl bg-white"
                    key={index}
                  >
                    <Image
                      src={item}
                      alt="member image"
                      fill
                      className="mx-auto object-contain transition-all group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social icons */}
      <section className="section-gap">
        <div className="site-container">
          <div className="grid grid-cols-2 place-items-center gap-4 md:grid-cols-5 lg:grid-cols-9">
            <div className="col-span-1 lg:col-start-3">
              <Link
                href="#"
                target="_blank"
                className="inline-flex rounded-full bg-[#1877F2] p-2 text-white transition hover:opacity-90"
                aria-label="Facebook"
              >
                <Facebook className="h-8 w-8" />
              </Link>
            </div>

            <div className="col-span-1">
              <Link
                href="#"
                target="_blank"
                className="inline-flex rounded-full bg-[#1DA1F2] p-2 text-white transition hover:opacity-90"
                aria-label="Twitter"
              >
                <Twitter className="h-8 w-8" />
              </Link>
            </div>

            <div className="col-span-1">
              <Link
                href="#"
                target="_blank"
                className="inline-flex rounded-full bg-linear-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-2 text-white transition hover:opacity-90"
                aria-label="Instagram"
              >
                <Instagram className="h-8 w-8" />
              </Link>
            </div>

            <div className="col-span-1">
              <Link
                href="#"
                target="_blank"
                className="inline-flex rounded-full bg-[#0A66C2] p-2 text-white transition hover:opacity-90"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-8 w-8" />
              </Link>
            </div>

            <div className="col-span-1">
              <Link
                href="#"
                target="_blank"
                className="inline-flex rounded-full bg-red-600 p-2 text-white transition hover:opacity-90"
                aria-label="LinkedIn"
              >
                <Youtube className="h-8 w-8" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Site description */}
      <section className="section-gap bg-white">
        <div className="site-container">
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
    </div>
  );
}
