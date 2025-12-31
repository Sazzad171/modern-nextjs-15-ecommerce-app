'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  storage?: string;
  color?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 14 Pro',
    price: 999.99,
    image: '/images/products/1.webp',
    category: 'Smartphones',
    storage: '128GB',
    color: 'Space Black',
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    price: 1199.99,
    image: '/images/products/2.webp',
    category: 'Smartphones',
    storage: '256GB',
    color: 'Natural Titanium',
  },
  {
    id: 3,
    name: 'iPhone 16 Pro',
    price: 1299.99,
    image: '/images/products/3.webp',
    category: 'Smartphones',
    storage: '512GB',
    color: 'Desert Titanium',
  },
  {
    id: 4,
    name: 'iPhone 16',
    price: 1799.99,
    image: '/images/products/2.webp',
    category: 'Smartphones',
    storage: '512GB',
    color: 'Desert Titanium',
  },
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
      <section>
        <div className="container mx-auto px-4 py-4">
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
            <div className="col-span-3 lg:pl-8">
              {/* Title */}
              <div>
                <h1 className="text-2xl font-semibold">{name}</h1>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-primary text-3xl font-bold text-red-600">৳{price}</span>
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
                <button className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-red-700">
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

      <section>
        <div className="container mx-auto px-4 py-4">
          <Card className="border-gray-300 p-5">
            <CardContent className="p-0">
              <h2 className="mb-4 text-center text-2xl font-semibold text-red-500">
                <span className="border-b-2 border-gray-200">Description</span>
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

      <section className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-center text-3xl font-bold">Related Products</h1>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group rounded-xl border-2 border-red-500 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-800"
              >
                {/* Product Image */}
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-red-500 px-3 py-1 text-xs text-white">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-800 dark:text-white">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-red-600">${product.price}</span>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Free Shipping</p>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-red-700">
                      Add to Cart
                    </button>
                  </div>

                  {/* Rating */}
                  <div className="mt-4 flex items-center">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(4)}
                      <span className="text-gray-300">★</span>
                    </div>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      (128 reviews)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
