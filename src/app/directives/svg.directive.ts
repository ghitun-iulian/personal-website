import { HttpClient } from '@angular/common/http';
import { Directive, ElementRef, inject, Input } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Directive({
  selector: '[svgIcon]',
})
export class SvgDirective {
  private el = inject(ElementRef);
  private http = inject(HttpClient);

  @Input('svgIcon') set icon(icon: string) {
    if (!icon) return;
    this.loadSvg(icon);
  }

  private loadSvg(name: string) {
    const src = `assets/${name}.svg`;
    this.el.nativeElement.classList.add('svg');
    firstValueFrom(this.http.get(src, { responseType: 'text' })).then(
      (svg) => (this.el.nativeElement.innerHTML = svg)
    );
  }
}
