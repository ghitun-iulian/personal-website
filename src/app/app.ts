import { Component, inject } from '@angular/core';
import { Tools } from './tools/tools';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [Tools, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'cv';
}
