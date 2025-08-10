import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BehaviorSubject, combineLatest, map, Observable, tap } from 'rxjs';
import { SvgDirective } from '../../directives/svg.directive';
import { CvLanguages, CvService } from '../../services/cv.service';
import { cvSections, Section, SectionItem } from '../data/cv.data';

@Component({
  selector: 'cv-nav',
  imports: [CommonModule, RouterLink, SvgDirective],
  templateUrl: './cv-nav.html',
  styleUrl: './cv-nav.scss',
})
export class CvNav {
  private cvService = inject(CvService);

  menuOpen$ = new BehaviorSubject<boolean>(false);
  set menuOpen(value: boolean) {
    this.menuOpen$.next(value);
  }

  navItems$: Observable<SectionItem[]> = this.cvService.language$.pipe(
    map((language: CvLanguages) => {
      const sections = cvSections.map((section: Section) => ({
        id: section.id,
        icon: section.icon,
        label: section.label[language],
      }));
      return [
        {
          id: 'home',
          icon: 'home',
          label: 'Home',
        },
        ...sections,
      ];
    })
  );

  data$ = combineLatest({
    language: this.cvService.language$,
    activeSection: this.cvService.fragment$,
    navItems: this.navItems$,
    menuOpen: this.menuOpen$,
  });
}
