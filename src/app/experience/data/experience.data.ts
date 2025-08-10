import { CvLanguages } from '../../services/cv.service';
import experiences_ro from './experiences_ro.json';
import experiences_en from './experiences_en.json';

export interface ExperienceItem {
  company: string;
  location: string;
  period: string;
  position: string;
  description: string;
  skills: string[];
}

export const experienceData: Record<CvLanguages, ExperienceItem[]> = {
  ro: experiences_ro,
  en: experiences_en,
};
