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
    link.href = '/assets/cv/cv.pdf'
    link.download = 'Pablo_Quirino_CV.pdf'
    link.click()
  }
}
