import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class LanguageService {
  language$ = new BehaviorSubject<string>('en');
  set language(lang: string) { this.language$.next(lang); }
  get language(): string { return this.language$.value; }
}