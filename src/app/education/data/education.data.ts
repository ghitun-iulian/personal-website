import education_ro from './education_ro.json';
import education_en from './education_en.json';
import { CvLanguages } from '../../services/cv.service';

export interface EducationItem {
  title: string;
  period: string;
  institution: string;
}

export const educationData: Record<CvLanguages, EducationItem[]> = {
  ro: education_ro,
  en: education_en,
};
