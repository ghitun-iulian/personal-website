import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Education } from '../education/education';
import { Experience } from '../experience/experience';
import { Info } from '../info/info';
import { Languages } from '../languages/languages';
import { LanguageService } from '../services/language.service';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { SvgDirective } from '../directives/svg.directive';
import { BehaviorSubject, combineLatest, map, tap } from 'rxjs';

@Component({
  selector: 'cv',
  imports: [CommonModule, RouterLink, Info, SvgDirective],
  templateUrl: './cv.html',
  styleUrl: './cv.scss',
  host: { class: 'flex-row-flex1' },
})
export class Cv {
  private languageService = inject(LanguageService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  activeSection$ = new BehaviorSubject<string>('about');

  sections$ = this.languageService.language$.pipe(
    map((language) => {
      return this.sections.map((section: any) => ({
        ...section,
        label: section.label[language],
      }));
    })
  );

  data$ = combineLatest({
    language: this.languageService.language$,
    activeSection: this.activeSection$,
    sections: this.sections$,
  });

  onSectionChange(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection$.next(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '-25% 0px -75% 0px',
      }
    );

    const lastSection = document.querySelector('.section:last-child');
    const main = document.querySelector('main');

    if (!lastSection || !main) return;

    const adjustLastSectionPadding = () => {
      const mainHeight = main.clientHeight;
      const lastHeight = lastSection.getBoundingClientRect().height;

      if (lastHeight >= mainHeight) return;
      const neededPadding = mainHeight - lastHeight;
      (lastSection as HTMLElement).style.paddingBottom = `${neededPadding}px`;
    };

    adjustLastSectionPadding();
    window.addEventListener('resize', adjustLastSectionPadding);

    this.sections.forEach((s: any) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
  }

  sections: any[] = [
    {
      id: 'about',
      icon: 'person',
      component: Experience,
      label: { ro: 'Despre', en: 'About' },
    },
    {
      id: 'experience',
      icon: 'work',
      component: Experience,
      label: { ro: 'Experiență', en: 'Experience' },
    },
    {
      id: 'education',
      icon: 'education',
      component: Education,
      label: { ro: 'Educație', en: 'Education' },
    },
    {
      id: 'skills',
      icon: 'skills',
      component: Skills,
      label: { ro: 'Competențe', en: 'Skills' },
    },
    {
      id: 'languages',
      icon: 'language',
      component: Languages,
      label: { ro: 'Limbi', en: 'Languages' },
    },
    {
      id: 'projects',
      icon: 'folder',
      component: Projects,
      label: { ro: 'Proiecte', en: 'Projects' },
    },
  ];
}
