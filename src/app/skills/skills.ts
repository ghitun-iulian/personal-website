import { Component, Input } from '@angular/core';

@Component({
  selector: 'skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  @Input() set language(language: string) {
    if (!language) return;
  }
}
