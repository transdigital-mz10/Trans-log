export interface Partner {
  id: string;
  name: string;
  logo: string;
  url: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  price?: number;
  features: string[];
  specifications: Record<string, any>;
  images: string[];
  category: string;
  sku: string;
  productUrl: string;
  partner: Partner;
}
