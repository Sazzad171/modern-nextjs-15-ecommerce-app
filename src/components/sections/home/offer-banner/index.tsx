export default function OfferBanner() {
  return (
    <section className="section-gap">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bannerImages?.slice(2, 6)?.map((bannerItem, index) => (
            <div key={index} className="group relative h-74 w-full overflow-hidden rounded-md">
              <Image
                src={bannerItem}
                alt="banner image"
                fill
                className="object-cover transition-all group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
