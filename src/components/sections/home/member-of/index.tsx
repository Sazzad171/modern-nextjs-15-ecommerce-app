import { memberOf } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function MemberOf() {
  return (
    <section className="section-gap bg-orange-100">
      <div className="site-container">
        <div className="grid items-center gap-2 md:grid-cols-2 md:gap-8">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            <div className="col-span-2">
              <h2 className="mb-2 text-center text-2xl font-semibold">
                Subscribe To Our NewsLetter
              </h2>
              <Link href="/">
                <Image
                  src={'/images/home/subscribe.png'}
                  alt="Subscribe Logo"
                  width={160}
                  height={80}
                  className="mx-auto object-contain transition group-hover:scale-105"
                />
              </Link>
            </div>
            <div className="col-span-1">
              <h4 className="mb-1 text-center text-lg font-semibold">Complain Box</h4>
              <Link href="/">
                <Image
                  src={'/images/home/complaint.png'}
                  alt="complaint Logo"
                  width={60}
                  height={60}
                  className="mx-auto object-contain transition group-hover:scale-105"
                />
              </Link>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-center text-2xl font-bold">We Are Proud Member</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {memberOf?.map((item, index) => (
                <div
                  className="group relative h-30 w-full overflow-hidden rounded-xl bg-white"
                  key={index}
                >
                  <Image
                    src={item}
                    alt="member image"
                    fill
                    className="mx-auto object-contain transition-all group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
