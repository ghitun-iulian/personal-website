import education_ro from './education_ro.json';
import education_en from './education_en.json';
import { CvLanguage } from '../../services/cv.service';

export interface Education {
  title: string;
  period: string;
  institution: string;
}

export const educationData: Record<CvLanguage, Education[]> = {
  ro: education_ro,
  en: education_en,
};
