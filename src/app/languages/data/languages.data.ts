import lang_ro from './languages_ro.json';
import lang_en from './languages_en.json';
import { CvLanguage } from '../../services/cv.service';

export interface Language {
  language: string;
  cefr: string;
  level: string;
}

export const languagesData: Record<CvLanguage, Language[]> = {
  en: lang_en,
  ro: lang_ro,
};
