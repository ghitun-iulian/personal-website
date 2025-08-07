import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { SvgDirective } from '../directives/svg.directive';
import { Info } from '../info/info';
import { CvLanguage, CvService } from '../services/cv.service';
import { CvSection, cvSections, Section } from './data/cv.data';

@Component({
  selector: 'cv',
  imports: [CommonModule, RouterLink, Info, SvgDirective, RouterLinkActive],
  templateUrl: './cv.html',
  styleUrl: './cv.scss',
  host: { class: 'flex-row-flex1' },
})
export class Cv {
  private cvService = inject(CvService);

  menuOpen$ = new BehaviorSubject<boolean>(false);
  set menuOpen(value: boolean) {
    this.menuOpen$.next(value);
  }

  sections$: Observable<CvSection[]> = this.cvService.language$.pipe(
    map((language: CvLanguage) => {
      return cvSections.map((section: Section) => ({
        ...section,
        label: section.label[language],
        title: section.title[language],
        context: { $implicit: section.id },
      }));
    })
  );

  data$ = combineLatest({
    language: this.cvService.language$,
    activeSection: this.cvService.fragment$,
    fragment: this.cvService.fragment$,
    sections: this.sections$,
    menuOpen: this.menuOpen$,
  });
}
