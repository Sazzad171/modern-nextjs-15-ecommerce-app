'use client';

import { ProductItemCard } from '@/components/product/ProductItem';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { productsData } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Heart, Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface ProductInfoProps {
  name: string;
  price: number;
  originalPrice?: number;
}

const productImages = [
  '/images/products/1.webp',
  '/images/products/2.webp',
  '/images/products/3.webp',
];

const ProductDetailsPage = ({
  name = 'iPhone 15 Pro',
  price = 80000,
  originalPrice = 120000,
}: ProductInfoProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [qty, setQty] = useState(1);

  return (
    <>
      <section className="py-4">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="col-span-2">
              <div className="bg-muted relative mb-2 aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src={productImages[activeIndex]}
                  alt="Product image"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Thumbnails (Scrollable) */}
              <div className="relative">
                <div className="scrollbar-thin flex gap-3 overflow-x-auto pb-2">
                  {productImages.map((img, index) => (
                    <button
                      key={img}
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        'relative h-20 w-20 shrink-0 overflow-hidden rounded-md border transition',
                        activeIndex === index
                          ? 'ring-primary ring-2'
                          : 'hover:ring-muted-foreground hover:ring-1'
                      )}
                    >
                      <Image src={img} alt="Product thumbnail" fill className="object-contain" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-3 lg:pt-6 lg:pl-8">
              {/* Title */}
              <div>
                <h1 className="text-2xl font-semibold">{name}</h1>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-primary text-primary text-3xl font-bold">৳{price}</span>
                {originalPrice && (
                  <span className="text-muted-foreground line-through">৳{originalPrice}</span>
                )}
              </div>

              <div className="my-4">
                <h5 className="text-lg font-medium">Features:</h5>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, cum! Ducimus totam
                  quidem maiores dolores cumque nemo assumenda eius similique. Neque id earum
                  aliquid, eveniet voluptatibus doloribus sit animi minus.
                </p>
              </div>

              {/* Quantity */}
              <div className="my-6 flex items-center gap-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center rounded-md border">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-10 text-center">{qty}</span>
                  <Button variant="ghost" size="icon" onClick={() => setQty((q) => q + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="bg-primary hover:bg-primary-hov rounded-lg px-4 py-2 font-medium text-white transition-colors duration-200">
                  Add to Cart
                </button>
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="site-container">
          <Card className="p-5">
            <CardContent className="p-0">
              <h2 className="text-primary mb-4 text-center text-2xl font-semibold">
                <span className="border-b-2 border-gray-200 pb-2">Product Details</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt rem laborum dolore
                aspernatur! Ut eveniet ad quis molestiae laboriosam ipsam dolore, sunt eligendi quas
                obcaecati, placeat velit ullam voluptatibus id!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-gap">
        <div className="site-container">
          <h1 className="mb-8 text-center text-3xl font-bold">Related Products</h1>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {productsData?.slice(4, 9)?.map((product) => (
              <ProductItemCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
