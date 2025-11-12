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
import vanstoneLogo from '../assets/partners/vanstone.png';

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
        name: 'Rugged Phone X11',
        description: 'Ultra-durable smartphone built to withstand extreme conditions',
        features: [
          '5.45″ LCD Screen',
          'Android 12',
          '4GB RAM',
          '64GB ROM',
          '16MP Rear Camera',
          '8,150mAh Battery',
          'G25 Helio Processor',
          'Dual-Sim + TF Card',
          'IP68 & IP69K',
          'Push To Talk (PTT)',
          'Face Unlock',
          'NFC & Glove Touch'
        ],
        image: 'https://ruggedsa.co.za/wp-content/uploads/2022/10/My-project-1.png',
        url: 'https://ruggedsa.co.za/product/ulefone-armor-x11-pro-4g-rugged-smartphone/'
      },
      
      {
        id: 'field-tablet-t3',
        name: 'Blackview Active 7 | 11″ Rugged Tablet | Android 15',
        description: 'Rugged tablet for field operations and inspections',
        features: [
          "11″ FDH+ Screen",
          'Android 15',
          '8GB RAM',
          '128GB ROM',
          '16MP Rear Camera',
          '20MP Night Vision',
          '10,000mAh Battery',
          'G81 MediaTek Helio Processor', 
          'Dual-Sim + TF Card',
          'IP68 & IP69',
          '45W Fast Charging',
          'Glove Touch',
          'NFC',
          'Docking station Included',
        ],
        
        image: 'https://ruggedsa.co.za/wp-content/uploads/2025/10/Blackview-Active-7.png',
        url: 'https://ruggedsa.co.za/product/blackview-active-7-11%e2%80%b3-rugged-tablet/'
      },

      {
        id: 'laptop-n15a',
        name: 'ONERugged N15A 15.6″ 12th Gen Intel Core i7 Windows AI Rugged Notebook',
        description: 'Rugged tablet for field operations and inspections',
        features: [
          "15.6″ HD Screen",
          'Windows 11',
          '16GB RAM',
          '256GB ROM',
          'Industrial I/O Ports',
          'Intel Core i7-1255U Processor',
          '1300mah Battery  (Built-in)',
          '4850mah (Removable)',
          'IP65 & MIL-STD-810H'
        ],
        image: 'https://ruggedsa.co.za/wp-content/uploads/2025/01/OneRugged-N14M-Rugged-Laptop.png',
        url: 'https://ruggedsa.co.za/product/blackview-active-7-11%e2%80%b3-rugged-tablet/'
      }
    ]
  },

  // Avansa
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
        image: 'https://avansa.co.za/cdn/shop/files/avansa-compactcount-2050-africas-smallest-money-counter-9106714.jpg?v=1758780887&width=1440',
        url: 'https://avansa.co.za/collections/money-counters/products/avansa-compactcount-2050-money-counter#product-modal'
      },
      {
        id: 'currency-counter-c350',
        name: 'Avansa PayMount 3000 Universal Card Machine Stand - PED Mount',
        description: 'High-speed currency counting machine with counterfeit detection',
        features: [
          'Universal fit for most payment terminals.',
          'Robust, durable construction for busy use.',
          'Integrated cable management, clutter-free counter.',
          'Adjustable tilt and swivel for customer ease.',
          '30 Day Satisfaction Guarantee*'
        ],
        image: 'https://avansa.co.za/cdn/shop/files/avansa-paymount-3000-universal-card-machine-stand-ped-mount-9640772.png?v=1758780978&width=1080',
        url: 'https://avansa.co.za/collections/pos-machines/products/avansa-universal-card-machine-stand#product-modal'
      },
    ]
  },

  // Vanstone
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
        id: 'a99',
        name: 'A99',
        description: '',
        features: [
          'OS android Based on Android 12.0',
          'Quad-core Cortex-A53, 2.0GHz+Secure Processor',
          'Battery: 7.6V/3000mAh',
          '4G (Supports 3G&2G) Bluetooth 5.0 Wi-Fi 2.4GHz&5GHz'
        ],
        image: 'https://www.vanstone.com.cn/en/uploads/20230713/0fdcfc45ffbc39851944bae1d7651525.png',
        url: 'https://www.vanstone.com.cn/en/products/smart-pos-v10'
      },
      {
        id: 'a60',
        name: 'A60',
        description: '',
        features: [
          'OS Vandroid Based on Android 10.0',
          'Quad-core Cortex-A53, 1.5GHz+Secure Processor',
          'Battery: 3.6V/4000mAh',
          '4G (Supports 3G&2G) Bluetooth 5.0 Wi-Fi 2.4GHz&5GHz'
        ],
        image: 'https://www.vanstone.com.cn/en/uploads/20250522/255d5ddcce2d176dad2d59bba4a93085.png',
        url: 'https://www.vanstone.com.cn/en/products/smart-pos-v10'
      },
      {
        id: 'v77',
        name: 'V77',
        description: '',
        features: [
          'OS VanLin',
          'Cortex-A5, 500MHz+Secure Processor',
          'Battery: 3.6V/4000mAh',
          '4G (Supports 3G&2G) Bluetooth 5.0 Wi-Fi 2.4GHz&5GHz',
          'QR Code Payments',
          'Card Payments'
        ],
        image: 'https://www.vanstone.com.cn/en/uploads/20241212/4c033dcffc36a989241535a22b1ff8c6.png',
        url: 'https://www.vanstone.com.cn/en/products/smart-pos-v10'
      }
    ]
  },
];
