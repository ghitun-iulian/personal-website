import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { CvLanguages, CvService } from '../services/cv.service';
import { LanguageItem, languagesData } from './data/languages.data';

@Component({
  selector: 'languages',
  imports: [CommonModule],
  templateUrl: './languages.html',
  styleUrl: './languages.scss',
  host: { class: 'flex-column' },
})
export class Languages {
  @Input() set language(language: CvLanguages) {
    this.languages$.next(languagesData[language]);
  }
  languages$ = new BehaviorSubject<LanguageItem[]>([]);
}
