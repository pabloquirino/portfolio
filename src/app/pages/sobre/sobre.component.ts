import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {
  async downloadCV() {
    try {
      const response = await fetch('/assets/cv/cv_pablo_quirino.pdf')
      const blob = await response.blob()
      const blobUrl = window.URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.href = blobUrl
      link.download = 'Cv_Pablo_Quirino.pdf'
      link.click()

      window.URL.revokeObjectURL(blobUrl)
    } catch (error) {
      console.error('Erro ao baixar o CV:', error)
    }
  }
}
