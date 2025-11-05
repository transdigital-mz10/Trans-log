import { CheckCircle, Settings, ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{t('services.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-300 via-slate-600 to-slate-300 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{t('services.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="group bg-white rounded-2xl p-10 shadow-sm hover:shadow-2xl transition-all border border-slate-100">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShoppingCart className="h-8 w-8 text-slate-700" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('services.procurement.title')}</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">{t('services.procurement.body')}</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600">{t('services.procurement.points.1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600">{t('services.procurement.points.2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600">{t('services.procurement.points.3')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600">{t('services.procurement.points.4')}</span>
              </li>
            </ul>
          </div>

          <div className="group bg-white rounded-2xl p-10 shadow-sm hover:shadow-2xl transition-all border border-slate-100">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Settings className="h-8 w-8 text-slate-700" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('services.maintenance.title')}</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">{t('services.maintenance.body')}</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600">{t('services.maintenance.points.1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600">{t('services.maintenance.points.2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600">{t('services.maintenance.points.3')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600">{t('services.maintenance.points.4')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 md:p-10 max-w-5xl mx-auto shadow-sm border border-slate-100">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-slate-900 mb-4">{t('services.agreements.title')}</h4>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">{t('services.agreements.body')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
