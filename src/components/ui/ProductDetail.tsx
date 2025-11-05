'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ImageGallery } from './ImageGallery';
import { Product } from '@/types/product';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="container mx-auto px-4 py-12 md:py-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Gallery */}
        <motion.div variants={fadeInUp} className="lg:sticky lg:top-24">
          <ImageGallery 
            images={product.images} 
            alt={product.name}
            className="lg:max-w-[600px] mx-auto"
          />
        </motion.div>

        {/* Product Info */}
        <motion.div variants={stagger} className="max-w-2xl mx-auto w-full">
          {/* Partner Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <div className="inline-flex items-center bg-gray-50 rounded-full px-4 py-2">
              {product.partner?.logo && (
                <div className="w-8 h-8 relative mr-2">
                  <Image
                    src={product.partner.logo}
                    alt={product.partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <span className="text-sm font-medium text-gray-600">
                {product.partner?.name}
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {product.name}
          </motion.h1>

          {/* Category */}
          {product.category && (
            <motion.p 
              variants={fadeInUp}
              className="text-blue-600 font-medium mb-6"
            >
              {product.category}
            </motion.p>
          )}

          {/* Description */}
          <motion.div 
            variants={fadeInUp}
            className="prose max-w-none mb-8 text-gray-600"
            dangerouslySetInnerHTML={{ 
              __html: product.description || 'No description available.' 
            }}
          />

          {/* Features */}
          {product.features.length > 0 && (
            <motion.div variants={fadeInUp} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Key Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Specifications */}
          {Object.keys(product.specifications).length > 0 && (
            <motion.div variants={fadeInUp} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Specifications
              </h3>
              <div className="bg-gray-50 rounded-xl p-4">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key}>
                        <td className="py-2 pr-4 font-medium text-gray-700 whitespace-nowrap">
                          {key}
                        </td>
                        <td className="py-2 text-gray-600">
                          {String(value)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <a
              href={product.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
            >
              View on {product.partner?.name || 'Partner'} Site
              <svg 
                className="ml-2 -mr-1 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </a>
            <button
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
            >
              Request Information
              <svg 
                className="ml-2 -mr-1 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
