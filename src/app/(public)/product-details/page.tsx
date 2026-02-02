'use client';

import { VariationRadio } from '@/components/custom-ui/variation-option';
import { VariationOption } from '@/components/custom-ui/variation-option/type';
import { ProductItemCard } from '@/components/product/ProductItem';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { productsData } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Heart, MapPin, Minus, Pin, Plus, Wallet } from 'lucide-react';
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

const lengthOptions: VariationOption[] = [
  { label: '0.5m (1.6ft)', value: '0.5m' },
  { label: '1m (3.3ft)', value: '1m' },
  { label: '2m (6.6ft)', value: '2m' },
];

const ProductDetailsPage = ({
  name = 'iPhone 17 Pro - Authentic USA Variant',
  price = 80000,
  originalPrice = 120000,
}: ProductInfoProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const [length, setLength] = useState('0.5m');

  return (
    <>
      <section className="py-4">
        <div className="site-container">
          <div className="grid gap-4 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="flex gap-2">
                {/* Thumbnails */}
                <div className="relative flex flex-col justify-center gap-2">
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
                {/* Main image */}
                <div className="bg-muted relative mb-2 aspect-square w-full overflow-hidden rounded-lg">
                  <Image
                    src={productImages[activeIndex]}
                    alt="Product image"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              {/* Title */}
              <div>
                <h1 className="mb-1 text-2xl font-semibold">{name}</h1>
                <h4 className="text-sm font-semibold text-gray-600">Product ID: #FDSA44</h4>
              </div>

              {/* variation */}
              <div className="my-4 md:mt-3 md:mb-6">
                <VariationRadio options={lengthOptions} value={length} onChange={setLength} />
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-primary text-3xl font-bold">৳{price}</span>
                {originalPrice && (
                  <span className="text-muted-foreground line-through">৳{originalPrice}</span>
                )}
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
            <div className="md:col-span-3">
              <div className="space-y-3 rounded-lg p-3 shadow">
                <h4 className="border-b border-gray-200 pb-2 text-lg font-semibold text-gray-800">
                  Delivery Options
                </h4>
                <div className="flex gap-3">
                  <div className="size-6 pt-1">
                    <Pin className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-md font-medium">
                      Available Delivery Area: All over the Bangladesh
                    </h4>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="size-6 pt-1">
                    <MapPin className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-md font-medium">Dhaka, Dhaka City North</h4>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="size-6 pt-1">
                    <Wallet className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-md font-medium">Delivery Info</h4>
                    <p className="text-sm text-gray-500">Delivery Time: 1-7 Working days</p>
                    <p className="text-sm text-gray-500">Shipping Charge: TK 50</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="site-container">
          <Tabs defaultValue="overview">
            <TabsList className="mx-auto mb-4 flex w-fit">
              <TabsTrigger value="overview" className="px-6 py-3 text-base">
                Specification
              </TabsTrigger>
              <TabsTrigger value="analytics" className="px-6 py-3 text-base">
                Details
              </TabsTrigger>
              <TabsTrigger value="reports" className="px-6 py-3 text-base">
                Video
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Card className="p-5">
                <CardContent className="p-0">
                  <h2 className="text-primary mb-4 text-center text-2xl font-semibold">
                    <span className="border-b-2 border-gray-200 pb-2">Product Details</span>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt rem laborum
                    dolore aspernatur! Ut eveniet ad quis molestiae laboriosam ipsam dolore, sunt
                    eligendi quas obcaecati, placeat velit ullam voluptatibus id!
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics">
              <Card className="p-5">
                <CardContent className="p-0">
                  <h2 className="text-primary mb-4 text-center text-2xl font-semibold">
                    <span className="border-b-2 border-gray-200 pb-2">kjProduct Details</span>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt rem laborum
                    dolore aspernatur! Ut eveniet ad quis molestiae laboriosam ipsam dolore, sunt
                    eligendi quas obcaecati, placeat velit ullam voluptatibus id!
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reports">
              <Card className="p-5">
                <CardContent className="p-0">
                  <h2 className="text-primary mb-4 text-center text-2xl font-semibold">
                    <span className="border-b-2 border-gray-200 pb-2">Product Details</span>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt rem laborum
                    dolore aspernatur! Ut eveniet ad quis molestiae laboriosam ipsam dolore, sunt
                    eligendi quas obcaecati, placeat velit ullam voluptatibus id!
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="section-gap">
        <div className="site-container">
          <h1 className="mb-8 text-center text-3xl font-bold">Related Products</h1>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
