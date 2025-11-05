import { Building2, Cpu, Monitor, Package, Shield, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Products() {
  const { t } = useTranslation();
  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{t('products.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-300 via-slate-600 to-slate-300 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{t('products.subtitle')}</p>
        </div>

        <div className="space-y-12">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl flex items-center justify-center">
                <Monitor className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">{t('products.computing.title')}</h3>
            </div>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">{t('products.computing.body')}</p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors">
                  <Cpu className="h-6 w-6 text-slate-700" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{t('products.computing.cards.1.title')}</h4>
                <p className="text-slate-600 leading-relaxed">{t('products.computing.cards.1.body')}</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors">
                  <Package className="h-6 w-6 text-slate-700" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{t('products.computing.cards.2.title')}</h4>
                <p className="text-slate-600 leading-relaxed">{t('products.computing.cards.2.body')}</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors">
                  <Monitor className="h-6 w-6 text-slate-700" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{t('products.computing.cards.3.title')}</h4>
                <p className="text-slate-600 leading-relaxed">{t('products.computing.cards.3.body')}</p>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href="/products/computing-hardware"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-all hover:shadow-lg"
              >
                {t('products.cta.viewAll')}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl flex items-center justify-center">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">{t('products.rugged.title')}</h3>
            </div>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">{t('products.rugged.body')}</p>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-slate-900 mb-3">{t('products.rugged.section.title')}</h4>
                <p className="text-slate-600 leading-relaxed mb-4">{t('products.rugged.section.body')}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-slate-600">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>{t('products.rugged.points.1')}</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-600">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>{t('products.rugged.points.2')}</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-600">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>{t('products.rugged.points.3')}</span>
                  </li>
                </ul>
                <a
                  href="/products/rugged-hardware"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-all hover:shadow-lg"
                >
                  {t('products.cta.view')}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl flex items-center justify-center">
                <Building2 className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">{t('products.banking.title')}</h3>
            </div>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">{t('products.banking.body')}</p>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                {t('products.banking.section.title')}
              </h4>
              <p className="text-slate-600 leading-relaxed mb-6">{t('products.banking.section.body')}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/products/banking-solutions"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-all hover:shadow-lg"
                >
                  {t('products.cta.view')}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <span className="px-4 py-3 text-sm text-slate-600 bg-slate-50 rounded-lg">
                  {t('products.banking.featuring')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}