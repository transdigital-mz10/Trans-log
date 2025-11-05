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
    category: string;
    sku: string;
  }[];
};

import ruggedLogo from '../assets/partners/ruggedsa.png';
import avansaLogo from '../assets/partners/avansa.png';
import vanstoneLogo from '../assets/partners/vanstone.svg';
import axonLogo from '../assets/partners/axonwireless.png';

export const partnerOfferings: PartnerOffering[] = [
  {
    id: 'ruggedsa',
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
        description: 'Ultra-durable smartphone designed for extreme conditions with military-grade protection',
        image: '/images/partners/ruggedsa/rugged-phone-x1.jpg',
        features: [
          'IP68 & MIL-STD-810G certified',
          '5.7" HD+ sunlight-readable display',
          'Dual SIM + 5G connectivity',
          '6000mAh battery with fast charging',
          'Barcode/QR code scanner'
        ],
        category: 'Rugged Phones',
        sku: 'RS-X1-BLK'
      },
      {
        id: 'industrial-tablet-t7',
        name: 'Industrial Tablet T7',
        description: 'Rugged 10" tablet for field operations and warehouse management',
        image: '/images/partners/ruggedsa/industrial-tablet-t7.jpg',
        features: [
          '10.1" FHD display with glove touch',
          'IP65 rated dust and water resistant',
          '4GB RAM / 64GB storage (expandable)',
          '8MP rear + 5MP front cameras',
          'Battery hot-swappable'
        ],
        category: 'Rugged Tablets',
        sku: 'RS-T7-10'
      },
      {
        id: 'handheld-scanner-hs100',
        name: 'Handheld Scanner HS100',
        description: 'Industrial-grade barcode scanner for logistics and inventory',
        image: '/images/partners/ruggedsa/handheld-scanner-hs100.jpg',
        features: [
          '1D/2D barcode scanning',
          'IP54 rated for dust/water resistance',
          'Bluetooth 5.0 connectivity',
          '8-hour battery life',
          'Drop resistant up to 2m'
        ],
        category: 'Scanners',
        sku: 'RS-HS100'
      }
    ]
  },
  {
    id: 'avansa',
    name: 'Avansa',
    url: 'https://avansa.co.za/',
    logo: avansaLogo,
    summary: 'Transactional hardware and cash-handling security solutions for retail and financial operations.',
    highlights: [
      'Money counters and counterfeit detectors',
      'POS peripherals and security solutions',
      'Safes and cash management systems',
    ],
    products: [
      {
        id: 'money-counter-mc2000',
        name: 'Money Counter MC2000',
        description: 'High-speed currency counter with advanced counterfeit detection',
        image: '/images/partners/avansa/money-counter-mc2000.jpg',
        features: [
          'Counts up to 1,500 bills/min',
          'UV/MG/IR/MT detection',
          'Multi-currency recognition',
          'Large LCD display',
          'Batch and add functions'
        ],
        category: 'Money Handling',
        sku: 'AV-MC2000'
      },
      {
        id: 'pos-security-cabinet',
        name: 'POS Security Cabinet',
        description: 'Heavy-duty security enclosure for POS systems',
        image: '/images/partners/avansa/pos-security-cabinet.jpg',
        features: [
          '16-gauge steel construction',
          'Adjustable shelves',
          'Ventilation and cable management',
          'Locking front and rear doors',
          'Wall or floor mounting options'
        ],
        category: 'POS Security',
        sku: 'AV-SC1000'
      },
      {
        id: 'coin-counter-cc500',
        name: 'Coin Counter CC500',
        description: 'High-capacity coin counting and sorting machine',
        image: '/images/partners/avansa/coin-counter-cc500.jpg',
        features: [
          'Counts up to 3,000 coins/min',
          'Automatic sorting by denomination',
          'Bagging station included',
          'Counterfeit coin detection',
          'LCD display with count tracking'
        ],
        category: 'Money Handling',
        sku: 'AV-CC500'
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
        id: 'android-pos-v3',
        name: 'Android POS V3',
        description: 'All-in-one Android POS terminal with versatile payment options',
        image: '/images/partners/vanstone/android-pos-v3.jpg',
        features: [
          '10.1" HD touchscreen',
          'Quad-core processor',
          '4G/WiFi/Bluetooth connectivity',
          'Multiple payment options',
          'Thermal printer support'
        ],
        category: 'POS Systems',
        sku: 'VS-APOS-V3'
      },
      {
        id: 'mobile-pos-m7',
        name: 'Mobile POS M7',
        description: 'Portable mPOS solution for on-the-go payments',
        image: '/images/partners/vanstone/mobile-pos-m7.jpg',
        features: [
          '5.5" HD touchscreen',
          'Battery powered (8+ hours)',
          'Bluetooth connectivity',
          'EMV/NFC/IC card reader',
          'Lightweight and portable'
        ],
        category: 'mPOS',
        sku: 'VS-MPOS-M7'
      },
      {
        id: 'barcode-scanner-bs300',
        name: 'Barcode Scanner BS300',
        description: 'Wireless handheld barcode scanner for retail and inventory',
        image: '/images/partners/vanstone/barcode-scanner-bs300.jpg',
        features: [
          '1D/2D barcode scanning',
          'Bluetooth 4.0 connectivity',
          'Omni-directional scanning',
          '30-hour battery life',
          'Compact and ergonomic design'
        ],
        category: 'Scanners',
        sku: 'VS-BS300'
      }
    ]
  },
];
