import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import static resources. In a larger app you might lazy load.
import pt from '../locales/pt/common.json';
import en from '../locales/en/common.json';

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en'],
    load: 'languageOnly',
    interpolation: { escapeValue: false },
    detection: {
      // Default to Portuguese
      order: ['querystring', 'localStorage', 'cookie', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
      lookupQuerystring: 'lang',
      cookieMinutes: 365 * 24 * 60,
    },
    returnNull: false,
  });

// Keep <html lang> in sync for accessibility and SEO signals
if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language || 'pt';
  i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
  });
}

export default i18n;
