'use client';

import { VariationRadio } from '@/components/custom-ui/variation-option';
import { VariationOption } from '@/components/custom-ui/variation-option/type';
import ProductDetailsTab from '@/components/sections/product-details/details-tabs';
import RelatedProducts from '@/components/sections/product-details/related-products';
import ShareProduct from '@/components/sections/product-details/share-product';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Heart, MapPin, Minus, Phone, Pin, Play, Plus, Star, Wallet } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProductInfoProps {
  name: string;
  price: number;
  originalPrice?: number;
}

type MediaItem =
  | { type: 'image'; src: string }
  | { type: 'youtube'; videoId: string; thumbnail: string };

const productMedia: MediaItem[] = [
  { type: 'image', src: '/images/products/1.webp' },
  { type: 'image', src: '/images/products/2.webp' },
  {
    type: 'youtube',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: '/images/products/3.webp',
  },
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
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
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
                  {productMedia.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (item.type === 'youtube') {
                          setActiveVideoId(item.videoId);
                          setVideoOpen(true);
                        } else {
                          setActiveIndex(index);
                        }
                      }}
                      className={cn(
                        'relative h-20 w-20 shrink-0 overflow-hidden rounded-md border transition',
                        activeIndex === index
                          ? 'ring-primary ring-2'
                          : 'hover:ring-muted-foreground hover:ring-1'
                      )}
                    >
                      {item.type === 'image' ? (
                        <Image
                          src={item.src}
                          alt="Product thumbnail"
                          fill
                          className="object-contain"
                        />
                      ) : (
                        <>
                          <Image
                            src={item.thumbnail}
                            alt="Video thumbnail"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <Play className="h-6 w-6 text-white" />
                          </div>
                        </>
                      )}
                    </button>
                  ))}
                </div>
                {/* Main image */}
                <div className="bg-muted relative mb-2 aspect-square w-full overflow-hidden rounded-lg">
                  {productMedia[activeIndex]?.type === 'image' && (
                    <Image
                      src={(productMedia[activeIndex] as any).src}
                      alt="Product image"
                      fill
                      priority
                      className="object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="md:col-span-5 md:pt-4">
              {/* Title */}
              <div>
                <h1 className="mb-1 text-2xl font-semibold">{name}</h1>
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <div>
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div>
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div>
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div>
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div>
                    <Star className="h-4 w-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm">14 Reviews</p>
                  </div>
                </div>
                <h4 className="mb-1 text-sm font-semibold text-gray-700">Product ID: #FDSA44</h4>
                <h5 className="text-sm font-semibold text-gray-500">Waranty available - 1 year</h5>
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
                <span className="text-primary text font-medium">Off 18%</span>
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
              <div className="mb-4 flex gap-3">
                <Button variant="outline" size="lg">
                  Add to Cart
                </Button>
                <Button size="lg">Buy Now</Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex gap-3">
                <div className="size-6 pt-1">
                  <Phone className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-md font-medium">Call For Order: +880167938364</h4>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 md:pt-4">
              <div className="space-y-3 rounded-lg p-3 pb-8 shadow md:min-h-64">
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
                <div className="flex flex-wrap items-center gap-2">
                  <div>
                    <Image
                      src="/images/payment-method-logo/Bkash.webp"
                      alt="payment methods"
                      width={50}
                      height={30}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/payment-method-logo/nagad.webp"
                      alt="payment methods"
                      width={50}
                      height={50}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/payment-method-logo/Visa.webp"
                      alt="payment methods"
                      width={50}
                      height={30}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Image
                      src={'/images/payment-method-logo/Amex.webp'}
                      alt="payment methods"
                      width={50}
                      height={20}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Button asChild variant={'outline'}>
                    <Link href="/terms-conditions">Waranty & Return</Link>
                  </Button>
                  <Button asChild variant={'outline'}>
                    <Link href="/terms-conditions">Seller Policy</Link>
                  </Button>
                </div>
                <div className="mt-4 rounded-md bg-gray-100 p-2">
                  <h4 className="text-sm font-medium">
                    Avail EMI Offer!{' '}
                    <Link href={'#'} className="text-primary">
                      See Plans
                    </Link>
                    <br />
                    EMI starts from TK 500/months
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ShareProduct />

      <ProductDetailsTab />

      <RelatedProducts />

      {/* Video dialog */}
      <Dialog
        open={videoOpen}
        onOpenChange={(open) => {
          setVideoOpen(open);
          if (!open) setActiveVideoId(null);
        }}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Product Video</DialogTitle>
          </DialogHeader>

          {activeVideoId && (
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                title="Product Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full rounded-md"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductDetailsPage;
