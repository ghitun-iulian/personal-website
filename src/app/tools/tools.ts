import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'tools',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tools.html',
  styleUrl: './tools.scss',
})
export class Tools {
  print() {
    window.print();
  }

  download() {
    const element = document.querySelector('html');
    const opt = {
      margin: 0,
      filename: 'cv.pdf',
      enableLinks: true,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(element).set(opt).save();
  }
}
