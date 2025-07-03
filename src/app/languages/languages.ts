import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'languages',
  imports: [CommonModule],
  templateUrl: './languages.html',
  styleUrl: './languages.scss',
})
export class Languages {
  data$ = new BehaviorSubject<{
    language: string;
  }>({
    language: 'en',
  });

  get data() {
    return this.data$.value;
  }

  set data(x: any) {
    this.data$.next({ ...this.data, ...x });
  }

  @Input() set language(language: string) {
    if (!language) return;
    this.data = { language };
  }
}
