import { PAGE_ROUTES } from '@/lib/constants/page-routes';
import { ImageType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface CategoryItemCardProps {
  item: ImageType;
}

export default function CategoryCardItem({ item }: CategoryItemCardProps) {
  return (
    <Link href={PAGE_ROUTES.PRODUCTS}>
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
  );
}
