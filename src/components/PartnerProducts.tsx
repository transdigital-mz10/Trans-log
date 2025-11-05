import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { partnerOfferings, type Product, type PartnerOffering } from '../data/partners';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

// Fallback component to display when there's an error
const ErrorFallback = () => (
  <div className="text-center py-12">
    <h3 className="text-xl font-medium text-red-600">Failed to load partner products</h3>
    <p className="mt-2 text-gray-600">Please try refreshing the page or contact support if the issue persists.</p>
  </div>
);

export default function PartnerProducts() {
  const [hasError, setHasError] = useState(false);

  // Log any errors in the component
  useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      console.error('Error in PartnerProducts:', event.error);
      setHasError(true);
    };
    
    const unhandledRejectionHandler = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection in PartnerProducts:', event.reason);
      setHasError(true);
    };
    
    window.addEventListener('error', errorHandler);
    window.addEventListener('unhandledrejection', unhandledRejectionHandler);
    
    return () => {
      window.removeEventListener('error', errorHandler);
      window.removeEventListener('unhandledrejection', unhandledRejectionHandler);
    };
  }, []);

  // If there's an error, show the fallback UI
  if (hasError) {
    return <ErrorFallback />;
  }

  // If partnerOfferings is not an array or is empty
  if (!Array.isArray(partnerOfferings) || partnerOfferings.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600">No partner products available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our partners' latest and most popular products
          </p>
        </motion.div>

        {partnerOfferings.map((partner: PartnerOffering) => (
          <div key={partner.id} className="mb-20">
            <div className="flex items-center mb-8">
              <div className="h-px bg-gray-200 flex-1"></div>
              <div className="px-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-auto flex items-center justify-center">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="h-full w-auto object-contain"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                          // Fallback to a placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiA2QjZCNkIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1idWlsZGluZy0yIj48cGF0aCBkPSJNMTggMjJWNGEyIDIgMCAwIDAtMi0yaC04YTIgMiAwIDAgMC0yIDJ2MTh6Ii8+PHBhdGggZD0iTTEwIDE2LjV2NCIvPjxwYXRoIGQ9Ik0xNCAxNi41djQiLz48cGF0aCBkPSJNMTAgOGg0Ii8+PC9zdmc+';
                        }}
                      />
                    ) : (
                      <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-gray-400 font-medium">
                          {partner.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold">{partner.name}</h3>
                </div>
              </div>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.isArray(partner.products) && partner.products.map((product: Product, index: number) => (
                <motion.div
                  key={product.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={index * 0.1}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-w-16 aspect-h-10 bg-gray-50 overflow-hidden">
                    <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                          // Fallback to a placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiA2QjZCNkIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1pbWFnZSI+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB4PSIzIiB5PSIzIiByeD0iMiIgcnkyPSIyIi8+PGNpcmNsZSBjeD0iOC41IiBjeT0iOS41IiByPSIxLjUiLz48cGF0aCBkPSJNMjEgMTVhMyAzIDAgMCAxLTMgM0g2bDQtNGMuLjktLjg5LTMtMy0zLTNzLTQgMy4xOS00IDRjMCAxLjUgNCAwIDQgMCIvPjwvc3ZnPg==';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-50">
                        <span className="text-gray-400">No image available</span>
                      </div>
                    )}
                  </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-gray-500 mb-2">Key Features:</h5>
                      <ul className="space-y-1">
                        {product.features.map((feature: string, i: number) => (
                          <li key={i} className="flex items-center">
                            <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a 
                      href={`/partners/${partner.id}#${product.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm mt-4 group-hover:underline"
                    >
                      View details
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                View all {partner.name} products
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
