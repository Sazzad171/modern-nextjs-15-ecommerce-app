export default function Banner() {
  return (
    <section className="section-gap">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {bannerImages?.slice(0, 2)?.map((bannerItem, index) => (
            <div key={index} className="group relative h-80 w-full overflow-hidden rounded-md">
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
