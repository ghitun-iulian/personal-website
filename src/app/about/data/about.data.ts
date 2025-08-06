import { CvLanguage } from '../../services/cv.service';
import about_en from './about.data_en.json';
import about_ro from './about.data_ro.json';

export const aboutData: Record<CvLanguage, string[]> = {
  ro: about_ro,
  en: about_en,
};
