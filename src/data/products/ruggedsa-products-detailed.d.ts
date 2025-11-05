declare module '@/data/products/ruggedsa-products-detailed.json' {
  interface RawProduct {
    name: string;
    description?: string;
    features?: string[];
    specifications?: Record<string, string>;
    images?: string[];
    image?: string;
    category?: string;
    sku?: string;
    url?: string;
    productUrl?: string;
  }

  const value: RawProduct[];
  export default value;
}
