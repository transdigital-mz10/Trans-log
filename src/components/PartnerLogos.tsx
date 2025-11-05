type Partner = {
  name: string;
  href: string;
  src: string;
  alt: string;
};

import ruggedLogo from '../assets/partners/ruggedsa.png';
import avansaLogo from '../assets/partners/avansa.png';
import vanstoneLogo from '../assets/partners/vanstone.svg';

const partners: Partner[] = [
  {
    name: 'Rugged SA',
    href: 'https://ruggedsa.co.za/',
    src: ruggedLogo,
    alt: 'Rugged SA',
  },
  {
    name: 'Avansa',
    href: 'https://avansa.co.za/',
    src: avansaLogo,
    alt: 'Avansa Business Technologies',
  },
  {
    name: 'Vanstone',
    href: 'https://www.vanstone.com.cn/en/',
    src: vanstoneLogo,
    alt: 'Vanstone Electronic',
  },
];

export function PartnerLogos() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
      {partners.map((p) => (
        <a
          key={p.name}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-start gap-3 group"
        >
          <img
            src={p.src}
            alt={p.alt}
            loading="lazy"
            className="max-h-10 sm:max-h-12 object-contain grayscale group-hover:grayscale-0 transition-all"
          />
          <span className="sr-only">{p.name}</span>
        </a>
      ))}
    </div>
  );
}
