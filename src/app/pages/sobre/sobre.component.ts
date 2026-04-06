import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {
  downloadCV() {
    const link = document.createElement('a')
    link.href = '/assets/cv/cv_pablo_quirino.pdf'
    link.download = 'cv_pablo_quirino.pdf'
    link.click()
  }

  downloadPDF() {
    const link = document.createElement('a')
    link.href = '/assets/cv/motivacional.pdf'
    link.download = 'motivacional.pdf'
    link.click()
  }
}
