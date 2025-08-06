import data_en from './info.data_en.json';
import data_ro from './info.data_ro.json';

interface ContactLinks {
  icon: string;
  label: string;
  link: string;
  type: 'url' | 'email' | 'phone';
}

export const infoData: any = {
  en: data_en,
  ro: data_ro,
};

export const contactLinks: ContactLinks[] = [
  {
    icon: 'mail',
    label: 'ghitun.iulian.bogdan@gmail.com',
    link: 'mailto:ghitun.iulian.bogdan@gmail.com',
    type: 'email',
  },
  {
    icon: 'phone',
    label: '+40 748 963 385',
    link: 'tel:+40748963385',
    type: 'phone',
  },
  {
    icon: 'linkedin',
    label: 'linkedin.com/in/ghitun-iulian',
    link: 'https://www.linkedin.com/in/ghitun-iulian',
    type: 'url',
  },
  {
    icon: 'github',
    label: 'github.com/ghitun-iulian',
    link: 'https://github.com/ghitun-iulian',
    type: 'url',
  },
];
