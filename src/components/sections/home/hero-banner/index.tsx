import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { homeBannerImageData } from '@/lib/data';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useRef } from 'react';

export default function HeroBanner() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  return (
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
          <div className="flex gap-2 md:col-span-4 md:block">
            <div>
              <Image
                src={'/images/home/sub-banner.webp'}
                alt="Company Logo"
                width={1500}
                height={800}
                className="mb-2 rounded-xl"
              />
            </div>
            <div>
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
      </div>
    </section>
  );
}
