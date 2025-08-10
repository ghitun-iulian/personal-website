import { CvLanguages } from '../../services/cv.service';
import skills_ro from './skills_ro.json';
import skills_en from './skills_en.json';

export interface SkillItem {
  label: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  label: string;
  skills: SkillItem[];
}

export const skillsData: Record<CvLanguages, SkillCategory[]> = {
  ro: skills_ro,
  en: skills_en,
};
