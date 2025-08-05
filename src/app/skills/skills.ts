import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SvgDirective } from '../directives/svg.directive';
import skills from './skills.json';

export interface Skill {
  label: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

@Component({
  selector: 'skills',
  imports: [CommonModule, SvgDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  host: { class: 'flex-column' },
})
export class Skills {
  skillsData: SkillCategory[] = skills;
}
