export default function HotDeals() {
  return (
    <div className="section-gap">
      <div className="site-container">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-3 shadow">
            <h2 className="text-lg font-semibold">Wireless Tech</h2>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {hotDeals?.slice(0, 4)?.map((item, index) => (
                <div className="mb-3" key={index}>
                  <Link href={PAGE_ROUTES?.PRODUCTS}>
                    <div className="group relative mb-1 h-34 w-full overflow-hidden">
                      <Image
                        src={item?.imgURL}
                        alt="offer image"
                        fill
                        className="object-cover transition-all group-hover:scale-105"
                      />
                    </div>
                    <h5 className="text-center text-sm font-medium">{item?.title}</h5>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-white p-3 shadow">
            <h2 className="text-lg font-semibold">Deals on Top Categories</h2>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {hotDeals?.slice(4, 8)?.map((item, index) => (
                <div className="mb-3" key={index}>
                  <Link href={PAGE_ROUTES?.PRODUCTS}>
                    <div className="group relative mb-1 h-34 w-full overflow-hidden">
                      <Image
                        src={item?.imgURL}
                        alt="offer image"
                        fill
                        className="object-cover transition-all group-hover:scale-105"
                      />
                    </div>
                    <h5 className="text-center text-sm font-medium">{item?.title}</h5>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-white p-3 shadow">
            <h2 className="text-lg font-semibold">Wireless Tech</h2>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {hotDeals?.slice(0, 4)?.map((item, index) => (
                <div className="mb-3" key={index}>
                  <Link href={PAGE_ROUTES?.PRODUCTS}>
                    <div className="group relative mb-1 h-34 w-full overflow-hidden">
                      <Image
                        src={item?.imgURL}
                        alt="offer image"
                        fill
                        className="object-cover transition-all group-hover:scale-105"
                      />
                    </div>
                    <h5 className="text-center text-sm font-medium">{item?.title}</h5>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-white p-3 shadow">
            <h2 className="text-lg font-semibold">Deals on Top Categories</h2>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {hotDeals?.slice(4, 8)?.map((item, index) => (
                <div className="mb-3" key={index}>
                  <Link href={PAGE_ROUTES?.PRODUCTS}>
                    <div className="group relative mb-1 h-34 w-full overflow-hidden">
                      <Image
                        src={item?.imgURL}
                        alt="offer image"
                        fill
                        className="object-cover transition-all group-hover:scale-105"
                      />
                    </div>
                    <h5 className="text-center text-sm font-medium">{item?.title}</h5>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
