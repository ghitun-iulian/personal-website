import { inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  map,
  shareReplay,
  tap,
} from 'rxjs';
import { cvSections } from '../cv/data/cv.data';

export enum CvLanguages {
  RO = 'ro',
  EN = 'en',
}

@Injectable({ providedIn: 'root' })
export class CvService {
  private route = inject(ActivatedRoute);

  language$ = new BehaviorSubject<CvLanguages>(CvLanguages.EN);
  set language(lang: CvLanguages) {
    this.language$.next(lang);
  }

  fragment$ = this.route.fragment.pipe(
    map((fragment: string | null) => fragment || cvSections[0].id),
    tap((fragment: string) => {
      document.getElementById(fragment)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }),
    shareReplay(1)
  );
}
