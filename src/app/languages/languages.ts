import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { CvService } from '../services/cv.service';
import { languagesData } from './data/languages.data';

@Component({
  selector: 'languages',
  imports: [CommonModule],
  templateUrl: './languages.html',
  styleUrl: './languages.scss',
  host: { class: 'flex-column' },
})
export class Languages {
  private cvService = inject(CvService);
  languagesData$ = this.cvService.language$.pipe(
    map((language) => languagesData[language])
  );

  data$ = combineLatest({
    Languages: this.languagesData$,
  });
}
