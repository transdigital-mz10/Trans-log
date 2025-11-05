export type Product = {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  url: string;
};

export type PartnerOffering = {
  id: string;
  name: string;
  url: string;
  logo: string;
  summary: string;
  highlights: string[];
  products: Product[];
};

import ruggedLogo from '../assets/partners/ruggedsa.png';
import avansaLogo from '../assets/partners/avansa.png';
import vanstoneLogo from '../assets/partners/vanstone.svg';

export const partnerOfferings: PartnerOffering[] = [
  {
    id: 'rugged-sa',
    name: 'Rugged SA',
    url: 'https://ruggedsa.co.za/',
    logo: ruggedLogo,
    summary: 'Rugged and industrial mobile technology for field operations, logistics, and harsh environments.',
    highlights: [
      'Rugged phones, tablets, scanners',
      'Industry use-cases: logistics, retail, utilities, warehousing',
      'Local distribution and support in South Africa',
    ],
    products: [
      {
        id: 'rugged-phone-x1',
        name: 'Rugged Phone X1',
        description: 'Ultra-durable smartphone built to withstand extreme conditions',
        features: [
          'IP68 water and dust resistance',
          'Shockproof design',
          'Long battery life (5000mAh)',
          '5G connectivity'
        ],
        image: '/images/rugged-phone.jpg',
        url: 'https://ruggedsa.co.za/products/rugged-phone-x1'
      },
      {
        id: 'field-tablet-t3',
        name: 'Field Tablet T3',
        description: 'Rugged tablet for field operations and inspections',
        features: [
          '10.1" sunlight-readable display',
          'Glove and wet touch support',
          'Barcode/RFID reader',
          'All-day battery life'
        ],
        image: '/images/field-tablet.jpg',
        url: 'https://ruggedsa.co.za/products/field-tablet-t3'
      }
    ]
  },
  {
    id: 'avansa',
    name: 'Avansa',
    url: 'https://avansa.co.za/',
    logo: avansaLogo,
    summary: 'Transactional hardware and cash-handling security for retail and financial operations.',
    highlights: [
      'Money counters, coin counters, counterfeit detectors',
      'POS peripherals, mounts, pay windows, security doors',
      'Safes, security bags, tamper-proof seals',
    ],
    products: [
      {
        id: 'money-counter-mc200',
        name: 'Money Counter MC200',
        description: 'High-speed currency counting machine with counterfeit detection',
        features: [
          'Counts up to 1,500 bills per minute',
          'UV/MG/IR counterfeit detection',
          'Batch counting and add functions',
          'Large LCD display'
        ],
        image: '/images/money-counter.jpg',
        url: 'https://avansa.co.za/products/money-counter-mc200'
      }
    ]
  },
  {
    id: 'vanstone',
    name: 'Vanstone',
    url: 'https://www.vanstone.com.cn/en/',
    logo: vanstoneLogo,
    summary: 'Smart POS, QR code terminals, and traditional POS solutions for various industries.',
    highlights: [
      'Android POS, mPOS, PIN pads, QR terminals',
      'Retail, restaurant, transportation solutions',
      'Global certifications and product portfolio',
    ],
    products: [
      {
        id: 'smart-pos-v10',
        name: 'Smart POS V10',
        description: 'All-in-one Android POS terminal for retail and hospitality',
        features: [
          '10.1" touchscreen display',
          'Multiple payment options',
          'Thermal printer and barcode scanner',
          '4G/Wi-Fi/Bluetooth connectivity'
        ],
        image: '/images/smart-pos.jpg',
        url: 'https://www.vanstone.com.cn/en/products/smart-pos-v10'
      }
    ]
  },
];
