import { useCallback, useEffect, useState } from 'react';
import i18n from '../lib/i18n.ts';

export function LanguageSwitcher() {
  const [lang, setLang] = useState(i18n.language || 'pt');

  useEffect(() => {
    const handler = () => setLang(i18n.language);
    i18n.on('languageChanged', handler);
    return () => {
      i18n.off('languageChanged', handler);
    };
  }, []);

  const change = useCallback(async (next: 'pt' | 'en') => {
    await i18n.changeLanguage(next);
    try {
      localStorage.setItem('i18nextLng', next);
    } catch {}
  }, []);

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => change('pt')}
        className={`px-2 py-1 rounded text-sm border ${lang?.startsWith('pt') ? 'bg-slate-800 text-white border-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-50'}`}
        aria-pressed={lang?.startsWith('pt')}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => change('en')}
        className={`px-2 py-1 rounded text-sm border ${lang?.startsWith('en') ? 'bg-slate-800 text-white border-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-50'}`}
        aria-pressed={lang?.startsWith('en')}
      >
        EN
      </button>
    </div>
  );
}
