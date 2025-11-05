import { ArrowRight, Server, Shield, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            {t('hero.title.line1')}
            <br />
            <span className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500 bg-clip-text text-transparent">
              {t('hero.title.line2')}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('services')}
              className="group px-8 py-4 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-all hover:shadow-xl flex items-center gap-2 text-lg font-medium"
            >
              {t('hero.cta.services')}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all text-lg font-medium"
            >
              {t('hero.cta.contact')}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
            <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Server className="h-7 w-7 text-slate-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {t('hero.card1.title')}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {t('hero.card1.body')}
            </p>
          </div>

          <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
            <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="h-7 w-7 text-slate-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {t('hero.card2.title')}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {t('hero.card2.body')}
            </p>
          </div>

          <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
            <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="h-7 w-7 text-slate-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {t('hero.card3.title')}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {t('hero.card3.body')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
