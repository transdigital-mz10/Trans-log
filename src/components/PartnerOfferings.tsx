import { partnerOfferings } from '../data/partners';
import { useTranslation } from 'react-i18next';

export function PartnerOfferings() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('partners.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-300 via-slate-600 to-slate-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partnerOfferings.map((p) => (
            <div key={p.name} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <img src={p.logo} alt={p.name} className="max-h-10 object-contain" />
                <h3 className="text-xl font-bold text-slate-900">{p.name}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">{p.summary}</p>
              <ul className="space-y-2 mb-6">
                {p.highlights.map((h, i) => (
                  <li key={i} className="text-slate-600 flex items-start gap-2 text-sm">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium"
              >
                {t('partners.cta')}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3.75 12a.75.75 0 0 1 .75-.75h12.69l-3.22-3.22a.75.75 0 1 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H4.5A.75.75 0 0 1 3.75 12Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
