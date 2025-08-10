import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { SvgDirective } from '../directives/svg.directive';
import { CvLanguages, CvService } from '../services/cv.service';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { SkillCategory, SkillItem, skillsData } from './data/skills.data';

@Component({
  selector: 'skills',
  imports: [CommonModule, SvgDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  @Input() set language(language: CvLanguages) {
    this.skills$.next(skillsData[language]);
  }
  skills$ = new BehaviorSubject<SkillCategory[]>([]);
}
