import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import TranslatePt from './json/pt.json';
import TranslateEn from './json/en.json';
import TranslateEs from './json/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: TranslatePt },
      en: { translation: TranslateEn },
      es: { translation: TranslateEs },
    },
    lng: 'pt', // idioma padrão
    fallbackLng: 'pt', // idioma de fallback
    interpolation: {
      escapeValue: false, // React já faz o escape
    },
  });

export default i18n;
