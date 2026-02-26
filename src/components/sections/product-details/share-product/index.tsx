import { Facebook, Linkedin, LinkIcon, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function ShareProduct() {
  const shareUrl = '';

  const itemClass =
    'flex items-center gap-2 cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition hover:opacity-80';

  const copyLink = async () => {
    await navigator.clipboard.writeText('copy something');
    alert('Link copied!');
  };

  return (
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
  );
}
