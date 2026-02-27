import { homeFeatures } from '@/lib/data';
import Image from 'next/image';

export default function Features() {
  return (
    <section className="section-gap">
      <div className="site-container">
        <div className="grid grid-cols-2 items-stretch gap-2 md:grid-cols-3 md:gap-0 lg:grid-cols-5">
          {homeFeatures?.map((featureItem, index) => (
            <div
              className="flex items-center gap-4 border-r border-gray-200 px-2 last:border-0 md:justify-center"
              key={index}
            >
              <Image
                src={featureItem?.imageURL}
                alt={featureItem?.alt}
                width={36}
                height={36}
                className="object-contain"
              />
              <h5 className="text-sm font-medium md:text-xl">{featureItem?.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
