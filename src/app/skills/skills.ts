import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SvgDirective } from '../directives/svg.directive';
import { CvService } from '../services/cv.service';
import { combineLatest, map } from 'rxjs';
import { skillsData } from './data/skills.data';

@Component({
  selector: 'skills',
  imports: [CommonModule, SvgDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  host: { class: 'flex-column' },
})
export class Skills {
  private cvService = inject(CvService);

  skills$ = this.cvService.language$.pipe(
    map((language) => skillsData[language])
  );

  data$ = combineLatest({
    skills: this.skills$,
  });
}
