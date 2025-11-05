import { notFound } from 'next/navigation';
import Image from 'next/image';
import { transformRuggedSAProducts } from '@/lib/products';
import { readFileSync } from 'fs';
import path from 'path';

export async function generateStaticParams() {
  const productsData = JSON.parse(
    readFileSync(
      path.join(process.cwd(), 'src/data/products/ruggedsa-products-detailed.json'),
      'utf-8'
    )
  );
  
  return transformRuggedSAProducts(productsData).map(product => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const productsData = JSON.parse(
    readFileSync(
      path.join(process.cwd(), 'src/data/products/ruggedsa-products-detailed.json'),
      'utf-8'
    )
  );
  
  const products = transformRuggedSAProducts(productsData);
  const product = products.find(p => p.slug === params.slug);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={product.images[0] || '/placeholder-product.jpg'}
              alt={product.name}
              fill
              className="object-contain p-8"
              priority
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.slice(0, 4).map((image, index) => (
                <div key={index} className="relative aspect-square bg-gray-100 rounded overflow-hidden">
                  <Image
                    src={image}
                    alt={`${product.name} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {product.partner?.logo && (
              <div className="w-8 h-8 relative">
                <Image
                  src={product.partner.logo}
                  alt={product.partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <span className="text-sm text-gray-500">{product.partner?.name}</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-semibold text-blue-600 mb-6">{product.price}</p>
          
          <div className="prose max-w-none mb-8">
            {product.description ? (
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
            ) : (
              <p>No description available.</p>
            )}
          </div>
          
          {/* Features */}
          {product.features.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Specifications */}
          {Object.keys(product.specifications).length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Specifications</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key}>
                        <td className="py-2 pr-4 font-medium text-gray-700">{key}</td>
                        <td className="py-2 text-gray-600">{String(value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Request Quote
            </button>
            <a 
              href={product.productUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              View on {product.partner?.name || 'Partner'} Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
