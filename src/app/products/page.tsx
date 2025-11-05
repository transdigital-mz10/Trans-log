import { ProductsGrid } from '@/components/ui/ProductsGrid';
import { transformRuggedSAProducts } from '@/lib/products';

async function getProducts() {
  const response = await fetch('http://localhost:3000/api/products');
  if (!response.ok) {
    throw new Error('Failed to load products');
  }
  const data = await response.json();
  return transformRuggedSAProducts(data);
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Product Catalog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our range of high-quality products from trusted partners
        </p>
      </div>
      
      {products.length > 0 ? (
        <ProductsGrid 
          products={products}
          title=""
          description=""
        />
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
          <p className="text-gray-500">We couldn't find any products at the moment. Please check back later.</p>
        </div>
      )}
    </main>
  );
}