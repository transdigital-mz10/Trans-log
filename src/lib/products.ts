import { Product } from '@/types/product';

const RUGBRAND_SA = {
  id: 'ruggedsa',
  name: 'Rugged SA',
  logo: '/assets/partners/ruggedsa.png',
  url: 'https://ruggedsa.co.za/'
};

export function transformRuggedSAProducts(products: any[]): Product[] {
  return products
    .filter(product => product && (product.name || product.image)) // Filter out invalid products
    .map((product, index) => {
      // Generate a name from URL if name is empty
      const name = product.name || 
                 (product.url ? 
                   product.url.split('/').filter(Boolean).pop()?.replace(/-/g, ' ').replace(/\..*$/, '') || 
                   `Product ${index + 1}`
                 ) || 
                 `Product ${index + 1}`;
      
      const slug = name
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-');
      
      // Extract price if available
      const price = product.price || '';
      
      return {
        id: `ruggedsa-${index + 1}`,
        name: name,
        slug,
        description: product.description || '',
        price: typeof price === 'string' ? parseFloat(price.replace(/[^0-9.]/g, '')) || 0 : price || 0,
        features: Array.isArray(product.features) ? product.features : [],
        specifications: product.specifications || {},
        images: Array.isArray(product.images) ? product.images : [product.image].filter(Boolean),
        category: product.category || 'Rugged Phones',
        sku: product.sku || `RSA-${index + 1000}`,
        productUrl: product.url || product.productUrl || '',
        partner: RUGBRAND_SA
      };
    });
}
