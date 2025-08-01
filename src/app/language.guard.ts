import { inject, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { LanguageService } from './services/language.service';

@Injectable({ providedIn: 'root' })
export class LanguageGuard implements CanActivate {
  private router = inject(Router);
  private languageService = inject(LanguageService);

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
