import Marquee from 'react-fast-marquee';

export default function MarqueeText() {
  return (
    <section>
      <div className="site-container">
        <div className="rounded-md bg-gray-200 py-2">
          <Marquee speed={50} pauseOnHover>
            <h5 className="font-medium">
              🔥 Latest Deals: Free Shipping on Orders Over $50! | New Arrivals Just In! | 50% Off
              Summer Sale!
            </h5>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
