'use client';

import { VariationRadio } from '@/components/custom-ui/variation-option';
import { VariationOption } from '@/components/custom-ui/variation-option/type';
import { ProductItemCard } from '@/components/product/ProductItem';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { productsData } from '@/lib/data';
import { cn } from '@/lib/utils';
import {
  Download,
  Facebook,
  Heart,
  Linkedin,
  LinkIcon,
  Mail,
  MapPin,
  Minus,
  Pin,
  Play,
  Plus,
  Twitter,
  Wallet,
} from 'lucide-react';
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

  const shareUrl = '';

  const copyLink = async () => {
    await navigator.clipboard.writeText('copy something');
    alert('Link copied!');
  };

  const itemClass =
    'flex items-center gap-2 cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition hover:opacity-80';

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
              <div className="flex gap-3">
                <Button variant="outline" size="lg">
                  Add to Cart
                </Button>
                <Button size="lg">Buy Now</Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
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
                <div className="mt-4">
                  <Button asChild variant={'outline'}>
                    <Link href="/terms-conditions">Waranty & Return</Link>
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

      <section className="pb-4 md:pb-8">
        <div className="site-container">
          <div className="flex flex-wrap items-center gap-2">
            <p>Share Via:</p>
            {/* Email */}
            <Link
              href={`mailto:?subject=Check this product&body=${shareUrl}`}
              className={`${itemClass} bg-[#EA4335] text-white`}
            >
              <Mail size={16} />
              Mail
            </Link>

            {/* Twitter */}
            <Link
              href={`https://twitter.com/intent/tweet?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${itemClass} bg-[#1DA1F2] text-white`}
            >
              <Twitter size={16} />
              Twitter
            </Link>

            {/* Facebook */}
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${itemClass} bg-[#1877F2] text-white`}
            >
              <Facebook size={16} />
              Facebook
            </Link>

            {/* LinkedIn */}
            <Link
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${itemClass} bg-[#0A66C2] text-white`}
            >
              <Linkedin size={16} />
              LinkedIn
            </Link>

            {/* WhatsApp */}
            {/* <Link
        href={`https://wa.me/?text=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${itemClass} bg-[#25D366] text-white`}
      >
        <Whatsapp size={16} />
        WhatsApp
      </Link> */}

            {/* Copy Link */}
            <button onClick={copyLink} className={`${itemClass} bg-slate-800 text-white`}>
              <LinkIcon size={16} />
              Copy link
            </button>
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="site-container">
          <Tabs defaultValue="overview">
            <TabsList className="mx-auto mb-4 flex h-auto w-fit">
              <TabsTrigger value="overview" className="px-6 py-2 text-base">
                Specification
              </TabsTrigger>
              <TabsTrigger value="analytics" className="px-6 py-2 text-base">
                Details
              </TabsTrigger>
              <TabsTrigger value="reports" className="px-6 py-2 text-base">
                Video
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Card className="p-5">
                <CardContent className="relative p-0">
                  <span className="absolute top-0 right-0">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button size="icon" variant="outline">
                            <Download className="text-primary h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Download Specification</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </span>
                  <p>
                    <b>Lenovo IdeaPad Slim 3 15ARP10 Ryzen 7 7735HS 15.3" WUXGA Laptop</b>
                    <br />
                    The Lenovo IdeaPad Slim 3 15ARP10 Laptop features a powerful AMD Ryzen 7 7735HS
                    processor with 8 cores and 16 threads, delivering quick and responsive
                    performance at speeds up to 4.75GHz. This makes the Lenovo IdeaPad Slim 3
                    15ARP10 Ryzen 7 7735HS Laptop perfect for multitasking, productivity software,
                    light content creation, and efficient everyday computing. The integrated AMD
                    Radeon 680M Graphics provide fluid images for streaming, presentations, and
                    casual creative projects, while the AMD SoC platform improves efficiency and
                    stability. Memory performance is a crucial strength of the Lenovo IdeaPad Slim 3
                    15ARP10 Laptop, which has 16GB DDR5-4800 in dual-channel mode, 8GB soldered, and
                    an additional 8GB SODIMM. It also allows extension up to 24GB, providing
                    flexibility for future requirements. The storage is handled by a fast 512GB PCIe
                    4.0 NVMe SSD, with support for twin M.2 slots and extension up to two SSDs,
                    making this Lenovo Laptop ideal for huge files and quick boot times. The Lenovo
                    IdeaPad Slim 3 15ARP10 Laptop features a 15.3-inch WUXGA IPS display with
                    1920x1200 resolution, 300 nits brightness, anti-glare coating, and a
                    screen-to-body ratio of 90.7%, providing an immersive viewing experience suited
                    for lengthy work sessions. Dolby Audio-tuned stereo speakers, dual-array
                    microphones, and an HD webcam with a privacy shutter enhance conversation and
                    media consumption. Wi-Fi 6 and Bluetooth 5.3 provide rapid wireless
                    connectivity, while many ports such as USB-A, USB-C with Power Delivery,
                    DisplayPort, HDMI, and an SD card reader meet daily necessities. The Lenovo
                    IdeaPad Slim 3 15ARP10 Ryzen 7 7735HS 15.3" WUXGA Laptop, with its aluminum top
                    cover, MIL-STD-810H durability testing, Microsoft Pluton TPM 2.0 security, and
                    TÜV Rheinland Low Blue Light certification, stands out as a durable, modern, and
                    adaptable Lenovo laptop for today's customers.
                    <br />
                    <br />
                    <b>
                      Buy Lenovo IdeaPad Slim 3 15ARP10 Ryzen 7 7735HS 15.3" WUXGA Laptop from IT
                      Bazar
                    </b>
                    <br />
                    In Bangladesh, you can get the original Lenovo IdeaPad Slim 3 15ARP10 Ryzen 7
                    7735HS 15.3" WUXGA Laptop from IT Bazar. We have a large collection of the
                    latest Lenovo Laptops to purchase. Order Online Or Visit your Nearest IT Bazar
                    Shop to get yours at the lowest price. The Lenovo IdeaPad Slim 3 15ARP10 Ryzen 7
                    7735HS 15.3" WUXGA Laptop comes with a 2-year Warranty ( Battery & Adapter 1
                    Year).
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics">
              <Card className="p-5">
                <CardContent className="p-0">
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
                  <iframe
                    className="h-[400px] w-full rounded-lg"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Gadget Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
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
