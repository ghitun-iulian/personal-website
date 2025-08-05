import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { CvService } from '../services/cv.service';
import { experienceData } from './experience.data';

@Component({
  selector: 'experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  private cvService = inject(CvService);

  experiences$ = this.cvService.language$.pipe(
    map((lang) => experienceData[lang])
  );

  data$ = combineLatest({
    experiences: this.experiences$,
  });
}
