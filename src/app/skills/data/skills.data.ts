import { CvLanguage } from '../../services/cv.service';
import skills_ro from './skills_ro.json';
import skills_en from './skills_en.json';

export interface Skill {
  label: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: Record<CvLanguage, SkillCategory[]> = {
  ro: skills_ro,
  en: skills_en,
};
