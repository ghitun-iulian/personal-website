import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ContactLinks {
  icon: string;
  label: string;
  link: string;
  type: 'url' | 'email' | 'phone';
}

@Component({
  selector: 'info',
  imports: [CommonModule],
  templateUrl: './info.html',
  styleUrl: './info.scss',
  host: { class: 'flex-column' },
})
export class Info {
  data$ = new BehaviorSubject<{
    language: string;
    info: { [key: string]: string };
    links: ContactLinks[];
  }>({
    language: 'en',
    info: {},
    links: [],
  });

  get data() {
    return this.data$.value;
  }

  set data(x: any) {
    this.data$.next({ ...this.data, ...x });
  }

  @Input() set language(language: string) {
    if (!language) return;
    this.data = {
      language,
      info: this.info[language],
      links: this.contactList,
    };
  }

  info: any = {
    en: {
      name: 'Iulian Ghitun',
      about: 'English about',
    },
    ro: {
      name: 'Ghitun Iulian',
      about: 'Text in romana',
    },
  };

  contactList: ContactLinks[] = [
    {
      icon: 'email_logo.svg',
      label: 'ghitun.iulian.bogdan@gmail.com',
      link: 'mailto:ghitun.iulian.bogdan@gmail.com',
      type: 'email',
    },
    {
      icon: 'phone_logo.svg',
      label: '+40 748 963 385',
      link: 'tel:+40748963385',
      type: 'phone',
    },
    {
      icon: 'linkedin_logo.svg',
      label: 'linkedin.com/in/ghitun-iulian',
      link: 'https://www.linkedin.com/in/ghitun-iulian',
      type: 'url',
    },
    {
      icon: 'github_logo.svg',
      label: 'github.com/qBogdan',
      link: 'https://github.com/qBogdan',
      type: 'email',
    },
  ];
}
