import lang_ro from './languages_ro.json';
import lang_en from './languages_en.json';
import { CvLanguages } from '../../services/cv.service';

export interface LanguageItem {
  language: string;
  cefr: string;
  level: string;
}

export const languagesData: Record<CvLanguages, LanguageItem[]> = {
  en: lang_en,
  ro: lang_ro,
};
