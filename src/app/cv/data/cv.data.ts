import { About } from '../../about/about';
import { Education } from '../../education/education';
import { Experience } from '../../experience/experience';
import { Languages } from '../../languages/languages';
import { Projects } from '../../projects/projects';
import { CvLanguage } from '../../services/cv.service';
import { Skills } from '../../skills/skills';

export interface Section {
  id: string;
  icon: string;
  component: any;
  label: Record<CvLanguage, string>;
  title: Record<CvLanguage, string>;
}

export interface CvSection {
  id: string;
  icon: string;
  component: any;
  label: string;
  title: string;
  context: { $implicit: any };
}

export const cvSections: Section[] = [
  {
    id: 'about',
    icon: 'person',
    component: About,
    label: { ro: 'Despre', en: 'About' },
    title: { ro: 'Despre mine', en: 'About me' },
  },
  {
    id: 'experience',
    icon: 'work',
    component: Experience,
    label: { ro: 'Experiență', en: 'Experience' },
    title: { ro: 'Experiență ', en: 'Experience' },
  },
  {
    id: 'education',
    icon: 'education',
    component: Education,
    label: { ro: 'Educație', en: 'Education' },
    title: { ro: 'Educație si Formare', en: 'Education & Training' },
  },
  {
    id: 'skills',
    icon: 'skills',
    component: Skills,
    label: { ro: 'Competențe', en: 'Skills' },
    title: { ro: 'Competențe', en: 'Skills' },
  },
  {
    id: 'languages',
    icon: 'language',
    component: Languages,
    label: { ro: 'Limbi', en: 'Languages' },
    title: { ro: 'Limbi straine', en: 'Languages' },
  },
  // {
  //   id: 'projects',
  //   icon: 'folder',
  //   component: Projects,
  //   label: { ro: 'Proiecte', en: 'Projects' },
  //   title: { ro: 'Proiecte', en: 'Projects' },
  // },
];
