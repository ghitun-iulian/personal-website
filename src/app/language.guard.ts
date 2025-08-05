import { inject, Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { CvService } from './services/cv.service';

@Injectable({ providedIn: 'root' })
export class LanguageGuard implements CanActivate {
  private router = inject(Router);
  private languageService = inject(CvService);

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const lang = route.params['lang'];
    const allowed = ['en', 'ro'];

    const safeLang = allowed.includes(lang) ? lang : 'en';
    this.languageService.language = safeLang;

    if (safeLang !== lang) {
      return this.router.createUrlTree(['/en']);
    }

    return true;
  }
}
