export default function SocialIcons() {
  return (
    <section className="section-gap">
      <div className="site-container">
        <div className="grid grid-cols-2 place-items-center gap-4 md:grid-cols-5 lg:grid-cols-9">
          <div className="col-span-1 lg:col-start-3">
            <Link
              href="#"
              target="_blank"
              className="inline-flex rounded-full bg-[#1877F2] p-2 text-white transition hover:opacity-90"
              aria-label="Facebook"
            >
              <Facebook className="h-8 w-8" />
            </Link>
          </div>

          <div className="col-span-1">
            <Link
              href="#"
              target="_blank"
              className="inline-flex rounded-full bg-[#1DA1F2] p-2 text-white transition hover:opacity-90"
              aria-label="Twitter"
            >
              <Twitter className="h-8 w-8" />
            </Link>
          </div>

          <div className="col-span-1">
            <Link
              href="#"
              target="_blank"
              className="inline-flex rounded-full bg-linear-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-2 text-white transition hover:opacity-90"
              aria-label="Instagram"
            >
              <Instagram className="h-8 w-8" />
            </Link>
          </div>

          <div className="col-span-1">
            <Link
              href="#"
              target="_blank"
              className="inline-flex rounded-full bg-[#0A66C2] p-2 text-white transition hover:opacity-90"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-8 w-8" />
            </Link>
          </div>

          <div className="col-span-1">
            <Link
              href="#"
              target="_blank"
              className="inline-flex rounded-full bg-red-600 p-2 text-white transition hover:opacity-90"
              aria-label="LinkedIn"
            >
              <Youtube className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
