import { inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, map, shareReplay, tap } from 'rxjs';
import { cvSections } from '../cv/cv.data';

export type CvLanguage = 'ro' | 'en';

@Injectable({ providedIn: 'root' })
export class CvService {
  private route = inject(ActivatedRoute);

  language$ = new BehaviorSubject<CvLanguage>('en');
  set language(lang: CvLanguage) {
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
