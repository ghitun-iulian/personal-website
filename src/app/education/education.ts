import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  data$ = new BehaviorSubject<{
    language: string;
    education: any[]
  }>({
    language: 'en',
    education: []
  });

  get data() {
    return this.data$.value;
  }

  set data(x: any) {
    this.data$.next({ ...this.data, ...x });
  }

  @Input() set language(language: string) {
    if (!language) return;
    this.data = { 
      language, 
      education: this.education[language] 
    };
  }


  education_ro = [
    {
      period:'10.2014 - 04.2021',
      title:'',
      institution:'',
      description: '',
      link: '',
    }
  ]
  education_en = [
    {
      period:'',
      title:'',
      institution:'',
      description: '',
      link: '',
    }
  ]
  
  education:any = {
    ro: this.education_ro,
    en: this.education_en
  };
}
