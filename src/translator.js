import Polyglot from 'node-polyglot';
import itTranslations from './translations/it';
import enTranslations from './translations/en';


var [lang, locale] = (((navigator.userLanguage || navigator.language).replace('-', '_')).toLowerCase()).split('_');
var polyglot = new Polyglot(lang);

switch (lang) {
    case 'it':
        polyglot.extend(itTranslations);
        break;
    default:
        polyglot.extend(enTranslations);
        break;
}

export default polyglot;
