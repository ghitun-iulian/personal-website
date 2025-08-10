import { Component, inject } from '@angular/core';
import { About } from '../../about/about';
import { Experience } from '../../experience/experience';
import { Education } from '../../education/education';
import { Skills } from '../../skills/skills';
import { Languages } from '../../languages/languages';
import { Projects } from '../../projects/projects';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { CvService } from '../../services/cv.service';
import { cvSections } from '../data/cv.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-sections',
  imports: [
    CommonModule,
    About,
    Experience,
    Education,
    Skills,
    Languages,
    Projects,
  ],
  templateUrl: './cv-sections.html',
  styleUrl: './cv-sections.scss',
})
export class CvSections {
  private cvService = inject(CvService);

  sectionTemplates$ = new BehaviorSubject<Record<string, any>>({});
  language$ = this.cvService.language$;

  sections$ = combineLatest({
    language: this.language$,
    templates: this.sectionTemplates$,
  }).pipe(
    map(({ language, templates }) =>
      cvSections.map((section) => ({
        template: templates[section.id],
        title: section.title[language],
        id: section.id,
      }))
    )
  );
}
