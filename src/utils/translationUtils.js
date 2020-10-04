import Polyglot from 'node-polyglot';
import { enTranslations, itTranslations } from '../translations';

export const getMessage = (messageId) => {
  return polyglot.t(messageId);
};

const [lang] = (((navigator.userLanguage || navigator.language).replace('-', '_')).toLowerCase()).split('_');
const polyglot = new Polyglot(lang);

switch (lang) {
    case 'it':
        polyglot.extend(itTranslations);
        break;
    default:
        polyglot.extend(enTranslations);
        break;
}

export default polyglot;
