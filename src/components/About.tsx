import { Award, Target, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-300 via-slate-600 to-slate-300 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.intro')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="h-10 w-10 text-slate-700" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('about.mission.title')}</h3>
            <p className="text-slate-600 leading-relaxed">{t('about.mission.body')}</p>
          </div>

          <div className="text-center p-8">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="h-10 w-10 text-slate-700" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('about.expertise.title')}</h3>
            <p className="text-slate-600 leading-relaxed">{t('about.expertise.body')}</p>
          </div>

          <div className="text-center p-8">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-slate-700" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('about.commitment.title')}</h3>
            <p className="text-slate-600 leading-relaxed">{t('about.commitment.body')}</p>
          </div>
        </div>

        
      </div>
    </section>
  );
}
