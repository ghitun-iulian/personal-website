import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CvLanguages } from '../services/cv.service';
import { experienceData, ExperienceItem } from './data/experience.data';

@Component({
  selector: 'experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  @Input() set language(language: CvLanguages) {
    this.experiences$.next(experienceData[language]);
  }
  experiences$ = new BehaviorSubject<ExperienceItem[]>([]);
}
