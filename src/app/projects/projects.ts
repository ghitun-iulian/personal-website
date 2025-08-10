import { Component, Input } from '@angular/core';
import { CvLanguages } from '../services/cv.service';

@Component({
  selector: 'projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  @Input() set language(language: CvLanguages) {
    // console.log(language);
  }
}
