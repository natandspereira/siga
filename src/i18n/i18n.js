import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import languagePt from './json/pt.json';
import languageEn from './json/en.json';
import languageEs from './json/es.json';

i18n
    .use(initReactI18next)
    .init({
        resources:{
            pt:{
                translation:languagePt
            },
            en:{
                translation:languageEn
            },
            es:{
                translation:languageEs
            }
        },
        lng: 'pt',
        interpolation: {
            escapeValue: false,
        }
    });

    export default i18n;