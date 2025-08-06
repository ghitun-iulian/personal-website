import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  host: { class: 'flex-column-flex1 gap100' },
  template: `<router-outlet></router-outlet> `,
})
export class App {
  protected title = 'ghitun-iulian';
}
