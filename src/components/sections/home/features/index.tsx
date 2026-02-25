import { homeFeatures } from '@/lib/data';
import Image from 'next/image';

export default function Features() {
  return (
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
  );
}
