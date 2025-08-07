import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { CvService } from '../services/cv.service';
import { educationData } from './data/education.data';

@Component({
  selector: 'education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
  host: { class: 'flex-column' },
})
export class Education {
  private cvService = inject(CvService);

  educationData$ = this.cvService.language$.pipe(
    map((language) => educationData[language])
  );

  data$ = combineLatest({
    education: this.educationData$,
  });
}
