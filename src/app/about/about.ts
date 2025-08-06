import { Component, inject, Input } from '@angular/core';
import { CvLanguage, CvService } from '../services/cv.service';
import { aboutData } from './data/about.data';
import { combineLatest, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  host: { class: 'flex-column' },
})
export class About {
  private cvService = inject(CvService);

  private aboutData$ = this.cvService.language$.pipe(
    map((language: CvLanguage) => aboutData[language])
  );

  data$ = combineLatest({
    paragraphs: this.aboutData$,
  });
}
