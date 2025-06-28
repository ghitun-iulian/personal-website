import { Component, Input } from '@angular/core';

@Component({
  selector: 'info',
  imports: [],
  templateUrl: './info.html',
  styleUrl: './info.scss',
})
export class Info {
  @Input() set language(language: string) {
    if (!language) return;
  }
}
