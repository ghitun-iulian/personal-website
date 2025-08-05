import { CvLanguage } from '../services/cv.service';
import experiences_ro from './experiences_ro.json';
import experiences_en from './experiences_en.json';

export interface Experience {
  company: string;
  location: string;
  period: string;
  position: string;
  description: string;
  skills: string[];
}

export const experienceData: Record<CvLanguage, Experience[]> = {
  ro: experiences_ro,
  en: experiences_en,
};
