import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Info } from '../info/info';
import { Experience } from '../experience/experience';
import { Education } from '../education/education';
import { Skills } from '../skills/skills';
import { Languages } from '../languages/languages';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CvState } from './cv.interface';

@Component({
  selector: 'cv',
  imports: [CommonModule, Info, Experience, Education, Skills, Languages],
  templateUrl: './cv.html',
  styleUrl: './cv.scss',
  host: { class: 'flex-column-flex1' },
})
export class Cv {
  private route = inject(ActivatedRoute);

  state$ = new BehaviorSubject<CvState>({
    language: 'en',
  });

  get state() {
    return this.state$.value;
  }

  set state(state: Partial<CvState>) {
    this.state$.next({ ...this.state, ...(state as CvState) });
  }

  ngOnInit() {
    const language = this.route.snapshot.routeConfig?.path || 'en';
    this.state = { language };
  }
}
