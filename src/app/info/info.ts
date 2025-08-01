import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { LanguageService } from '../services/language.service';
import data_en from './info.data_en.json';
import data_ro from './info.data_ro.json';
import { SvgDirective } from '../directives/svg.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface ContactLinks {
  icon: string;
  label: string;
  link: string;
  type: 'url' | 'email' | 'phone';
}

@Component({
  selector: 'info',
  imports: [CommonModule, SvgDirective, RouterLink, RouterLinkActive],
  templateUrl: './info.html',
  styleUrl: './info.scss',
  host: { class: 'flex-column' },
})
export class Info {
  private languageService = inject(LanguageService);

  infoData: any = {
    en: data_en,
    ro: data_ro,
  };

  data$ = this.languageService.language$.pipe(
    map((l: string) => ({
      language: l,
      info: this.infoData[l],
      contactList: this.contactList,
    }))
  );

  contactList: ContactLinks[] = [
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
}
