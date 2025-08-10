import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Info } from '../info/info';
import { CvNav } from './cv-nav/cv-nav';
import { CvSections } from './cv-sections/cv-sections';

@Component({
  selector: 'cv',
  imports: [
    CommonModule,
    RouterLink,
    Info,
    RouterLinkActive,
    CvNav,
    CvSections,
  ],
  templateUrl: './cv.html',
  styleUrl: './cv.scss',
  host: { class: 'flex-row-flex1' },
})
export class Cv {}
