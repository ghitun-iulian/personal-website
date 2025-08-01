import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'home',
  // imports: [RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private route = inject(ActivatedRoute);

  ngOnInit() {
    const language = this.route.snapshot.routeConfig?.path || 'en';
    console.log(language);

    // this.state = { language };
  }
}
