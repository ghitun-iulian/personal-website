import { HttpClient } from '@angular/common/http';
import { Directive, ElementRef, inject, Input } from '@angular/core';
import { catchError, firstValueFrom, of } from 'rxjs';

@Directive({
  selector: '[svgIcon]',
})
export class SvgDirective {
  private el = inject(ElementRef);
  private http = inject(HttpClient);
  private static svgCache = new Map<string, string>();

  @Input('svgPath') path = 'assets';
  @Input('svgIcon') set icon(icon: string) {
    if (!icon) return;
    this.loadSvg(icon);
  }

  private async loadSvg(name: string) {
    const src = `${this.path}/${name}.svg`;
    this.el.nativeElement.classList.add('svg');

    if (SvgDirective.svgCache.has(src)) {
      this.el.nativeElement.innerHTML = SvgDirective.svgCache.get(src);
      return;
    }

    const svg = await firstValueFrom(
      this.http.get(src, { responseType: 'text' }).pipe(
        catchError(() => {
          return of('<svg><!-- missing icon --></svg>');
        })
      )
    );

    SvgDirective.svgCache.set(src, svg);
    this.el.nativeElement.innerHTML = svg;
  }
}
