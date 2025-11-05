export type PartnerOffering = {
  id: string;
  name: string;
  url: string;
  logo: string;
  summary: string;
  highlights: string[];
  products: {
    id: string;
    name: string;
    description: string;
    image: string;
    features: string[];
  }[];
};

import ruggedLogo from '../assets/partners/ruggedsa.png';
import avansaLogo from '../assets/partners/avansa.png';
import vanstoneLogo from '../assets/partners/vanstone.svg';

export const partnerOfferings: PartnerOffering[] = [
  {
    id: 'ruggedsa',
    name: 'Rugged SA',
    url: 'https://ruggedsa.co.za/',
    logo: ruggedLogo,
    summary:
      'Rugged and industrial mobile technology for field operations, logistics, and harsh environments.',
    highlights: [
      'Rugged phones, tablets, scanners',
      'Industry use-cases: logistics, retail, utilities, warehousing',
      'Local distribution and support in South Africa',
    ],
    products: [
      {
        id: 'rugged-phone-x1',
        name: 'Rugged Phone X1',
        description: 'Ultra-durable smartphone for extreme conditions',
        image: '/images/partners/ruggedsa/rugged-phone-x1.jpg',
        features: ['IP68 certified', 'Long battery life', 'Barcode scanner']
      },
      {
        id: 'industrial-tablet-t7',
        name: 'Industrial Tablet T7',
        description: 'Rugged tablet for field operations',
        image: '/images/partners/ruggedsa/industrial-tablet-t7.jpg',
        features: ['10" HD display', '4G connectivity', 'MIL-STD-810G certified']
      }
    ]
  },
  {
    id: 'avansa',
    name: 'Avansa',
    url: 'https://avansa.co.za/',
    logo: avansaLogo,
    summary:
      'Transactional hardware and cash-handling security for retail and financial operations.',
    highlights: [
      'Money counters, coin counters, counterfeit detectors',
      'POS peripherals, mounts, pay windows, security doors',
      'Safes, security bags, tamper-proof seals',
    ],
    products: [
      {
        id: 'money-counter-mc2000',
        name: 'Money Counter MC2000',
        description: 'High-speed currency counter with counterfeit detection',
        image: '/images/partners/avansa/money-counter-mc2000.jpg',
        features: ['Counts up to 1,500 bills/min', 'UV/MG/IR detection', 'Large LCD display']
      },
      {
        id: 'pos-security-cabinet',
        name: 'POS Security Cabinet',
        description: 'Secure enclosure for POS systems',
        image: '/images/partners/avansa/pos-security-cabinet.jpg',
        features: ['Heavy-duty steel construction', 'Adjustable shelving', 'Lockable']
      }
    ]
  },
  {
    id: 'vanstone',
    name: 'Vanstone',
    url: 'https://www.vanstone.com.cn/en/',
    logo: vanstoneLogo,
    summary:
      'Smart POS, QR code terminals, and traditional POS solutions for various industries.',
    highlights: [
      'Android POS, mPOS, PIN pads, QR terminals',
      'Retail, restaurant, transportation solutions',
      'Global certifications and product portfolio',
    ],
    products: [
      {
        id: 'android-pos-v3',
        name: 'Android POS V3',
        description: 'All-in-one Android POS terminal',
        image: '/images/partners/vanstone/android-pos-v3.jpg',
        features: ['10.1" touchscreen', 'Multiple payment options', '4G/WiFi connectivity']
      },
      {
        id: 'mobile-pos-m7',
        name: 'Mobile POS M7',
        description: 'Portable mPOS solution',
        image: '/images/partners/vanstone/mobile-pos-m7.jpg',
        features: ['5.5" display', 'Bluetooth connectivity', 'Battery powered']
      }
    ]
  },
];
