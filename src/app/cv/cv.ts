import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';
import { SvgDirective } from '../directives/svg.directive';
import { Info } from '../info/info';
import { CvLanguage, CvService } from '../services/cv.service';
import { CvSection, cvSections, Section } from './cv.data';

@Component({
  selector: 'cv',
  imports: [CommonModule, RouterLink, Info, SvgDirective],
  templateUrl: './cv.html',
  styleUrl: './cv.scss',
  host: { class: 'flex-row-flex1' },
})
export class Cv {
  private route = inject(ActivatedRoute);
  private cvService = inject(CvService);

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
    sections: this.sections$,
  });
}
