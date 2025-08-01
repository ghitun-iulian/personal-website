import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  data$ = new BehaviorSubject<{
    language: string;
    skills: any[]
  }>({
    language: 'en',
    skills: []
  });

  get data() {
    return this.data$.value;
  }

  set data(x: any) {
    this.data$.next({ ...this.data, ...x });
  }

  @Input() set language(language: string) {
    if (!language) return;
    this.data = { language, skills: this.skills };
  }

  skills = [
    {icon:'',
      label:''
    }
  ]
}
