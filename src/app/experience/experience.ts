import { Component, Input } from '@angular/core';

@Component({
  selector: 'experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  @Input() set language(language: string) {
    if (!language) return;
  }
}
