import { CvLanguages } from '../../services/cv.service';

export interface Section {
  id: string;
  icon: string;
  label: Record<CvLanguages, string>;
  title: Record<CvLanguages, string>;
}

export interface SectionItem {
  id: string;
  icon?: string;
  label?: string;
  title?: string;
}

export const cvSections: Section[] = [
  {
    id: 'about',
    icon: 'person',
    label: { ro: 'Despre', en: 'About' },
    title: { ro: 'Despre mine', en: 'About me' },
  },
  {
    id: 'experience',
    icon: 'work',
    label: { ro: 'Experiență', en: 'Experience' },
    title: { ro: 'Experiență ', en: 'Experience' },
  },
  {
    id: 'education',
    icon: 'education',
    label: { ro: 'Educație', en: 'Education' },
    title: { ro: 'Educație si Formare', en: 'Education & Training' },
  },
  {
    id: 'skills',
    icon: 'skills',
    label: { ro: 'Competențe', en: 'Skills' },
    title: { ro: 'Competențe', en: 'Skills' },
  },
  {
    id: 'languages',
    icon: 'language',
    label: { ro: 'Limbi', en: 'Languages' },
    title: { ro: 'Limbi straine', en: 'Languages' },
  },
  // {
  //   id: 'projects',
  //   icon: 'folder',
  //
  //   label: { ro: 'Proiecte', en: 'Projects' },
  //   title: { ro: 'Proiecte', en: 'Projects' },
  // },
];
