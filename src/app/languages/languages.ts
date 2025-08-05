import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'languages',
  imports: [CommonModule],
  templateUrl: './languages.html',
  styleUrl: './languages.scss',
})
export class Languages {}
