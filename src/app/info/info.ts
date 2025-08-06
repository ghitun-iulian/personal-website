import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { combineLatest, map, of } from 'rxjs';
import { SvgDirective } from '../directives/svg.directive';
import { CvService } from '../services/cv.service';
import { contactLinks, infoData } from './data/info.data';

@Component({
  selector: 'info',
  imports: [CommonModule, SvgDirective, RouterLink, RouterLinkActive],
  templateUrl: './info.html',
  styleUrl: './info.scss',
  host: { class: 'flex-column' },
})
export class Info {
  private cvService = inject(CvService);

  info$ = this.cvService.language$.pipe(map((l: string) => infoData[l]));

  data$ = combineLatest({
    language: this.cvService.language$,
    fragment: this.cvService.fragment$,
    contactList: of(contactLinks),
    info: this.info$,
  });
}
