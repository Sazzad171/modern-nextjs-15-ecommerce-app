import { topFeatures } from '@/lib/data';
import Image from 'next/image';

export default function AdProducts() {
  return (
    <section className="section-gap bg-white">
      <div className="site-container">
        <div className="grid grid-cols-2 items-stretch gap-y-2 md:grid-cols-3 lg:grid-cols-5">
          {topFeatures?.map((featureItem, index) => (
            <div
              className="flex items-center justify-center gap-2 border-r border-gray-300 px-2 last:border-0 md:gap-4"
              key={index}
            >
              <Image
                src={featureItem?.imgURL}
                alt={featureItem?.title}
                width={100}
                height={100}
                className="object-contain"
              />
              <h5 className="text-sm font-medium md:text-lg">{featureItem?.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
