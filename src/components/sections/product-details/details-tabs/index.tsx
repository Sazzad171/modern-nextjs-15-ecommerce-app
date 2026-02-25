import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Download, Star } from 'lucide-react';
import { useState } from 'react';

export default function ProductDetailsTab() {
  return (
    <>
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
              <TabsTrigger value="review" className="px-6 py-2 text-base">
                Review
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
            <TabsContent value="review">
              <Card className="p-5">
                <CardContent className="p-0">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="md:order-2">
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold">Customer Reviews</h4>

                        {[
                          {
                            name: 'Rahim Ahmed',
                            rating: 5,
                            comment: 'Excellent product! Highly recommended.',
                          },
                          {
                            name: 'Karim Uddin',
                            rating: 4,
                            comment: 'Very good quality, delivery was fast.',
                          },
                          {
                            name: 'Sadia Khan',
                            rating: 3,
                            comment: 'Product is okay, but packaging could be better.',
                          },
                        ].map((review, index) => (
                          <div key={index} className="rounded-lg border border-gray-200 p-4">
                            <div className="mb-2 flex items-center justify-between">
                              <h5 className="font-medium">{review.name}</h5>
                              <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={`h-4 w-4 ${
                                      star <= review.rating
                                        ? 'fill-yellow-400 text-yellow-400'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm text-gray-600">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="md:order-1">
                      <div className="mx-auto w-full max-w-md rounded-xl border border-gray-200 p-4">
                        <h3 className="mb-4 text-center text-lg font-semibold">
                          Submit Your Review
                        </h3>
                        <div className="mb-6 flex justify-center gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button key={star}>
                              <Star className="h-6 w-6 text-yellow-400" />
                            </button>
                          ))}
                        </div>
                        <textarea
                          // value={comment}
                          // onChange={(e) => setComment(e.target.value)}
                          placeholder="Write your review..."
                          className="focus:ring-primary mb-4 w-full rounded-md border border-gray-300 p-3 text-sm focus:ring-2 focus:outline-none"
                          rows={4}
                        />
                        <Button className="w-full">Submit Review</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
