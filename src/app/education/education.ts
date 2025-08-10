import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CvLanguages } from '../services/cv.service';
import { educationData, EducationItem } from './data/education.data';

@Component({
  selector: 'education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  @Input() set language(language: CvLanguages) {
    this.education$.next(educationData[language]);
  }
  education$ = new BehaviorSubject<EducationItem[]>([]);
}
