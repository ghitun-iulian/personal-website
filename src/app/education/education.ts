import { Component, Input } from '@angular/core';

@Component({
  selector: 'education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  @Input() set language(language: string) {
    if (!language) return;
  }
}
