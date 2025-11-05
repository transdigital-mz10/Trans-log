'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Package } from 'lucide-react';
import { supabase, Product, ProductCategory } from '@/lib/supabase';
import { useTranslation } from 'react-i18next';

export default function ProductCatalogPage({ params }: { params: { categorySlug: string } }) {
  const [category, setCategory] = useState<ProductCategory | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const { data: categoryData } = await supabase
        .from('product_categories')
        .select('*')
        .eq('slug', params.categorySlug)
        .maybeSingle();

      if (categoryData) {
        setCategory(categoryData);

        const { data: productsData } = await supabase
          .from('products')
          .select('*')
          .eq('category_id', categoryData.id)
          .order('is_featured', { ascending: false })
          .order('name');

        setProducts(productsData || []);
      }

      setLoading(false);
    }

    fetchData();
  }, [params.categorySlug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto py-20">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-800"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto py-20 text-center">
          <p className="text-slate-600">{t('catalog.notFound')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto py-12">
        <Link
          href="/products"
          className="group flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          {t('catalog.back')}
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {category.name}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            {category.description}
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <Package className="h-16 w-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-600 text-lg">{t('catalog.empty')}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col"
              >
                {product.image_url && (
                  <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <Package className="h-16 w-16 text-slate-400" />
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col">
                  {product.is_featured && (
                    <span className="inline-block px-3 py-1 bg-slate-800 text-white text-xs font-semibold rounded-full mb-3 w-fit">
                      {t('catalog.featured')}
                    </span>
                  )}

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {product.name}
                  </h3>

                  <p className="text-slate-600 mb-4 leading-relaxed flex-1">
                    {product.description}
                  </p>

                  {product.features && product.features.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-900 mb-2 text-sm">{t('catalog.keyFeatures')}</h4>
                      <ul className="space-y-1">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="text-slate-400 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {product.specifications && Object.keys(product.specifications).length > 0 && (
                    <div className="mb-4 p-4 bg-slate-50 rounded-lg">
                      <h4 className="font-semibold text-slate-900 mb-2 text-sm">{t('catalog.specifications')}</h4>
                      <dl className="space-y-1">
                        {Object.entries(product.specifications).slice(0, 3).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-sm">
                            <dt className="text-slate-600">{key}:</dt>
                            <dd className="text-slate-900 font-medium">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}


                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    {product.partner_name && (
                      <span className="text-sm text-slate-500">{t('catalog.by')} {product.partner_name}</span>
                    )}
                    {product.partner_url && (
                      <a
                        href={product.partner_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900 font-medium"
                      >
                        {t('catalog.learnMore')}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}