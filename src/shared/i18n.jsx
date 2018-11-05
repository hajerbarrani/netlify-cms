/* eslint-disable */
import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import { reactI18nextModule } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import fr from './locales/fr.json'
import en from './locales/en.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: "fr",
    resources: {
      fr: {
        translations: fr
      },
      en: {
        translations: en
      }
    },
    ns: ["translations"],
    defaultNS: "translations",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    }
  })
export default i18n
