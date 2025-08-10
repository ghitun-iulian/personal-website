import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CvLanguages } from '../services/cv.service';
import { aboutData } from './data/about.data';

@Component({
  selector: 'about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  @Input() set language(language: CvLanguages) {
    this.paragraphs$.next(aboutData[language]);
  }
  paragraphs$ = new BehaviorSubject<string[]>([]);
}
