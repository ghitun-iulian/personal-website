import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'tools',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tools.html',
  styleUrl: './tools.scss',
})
export class Tools {}
