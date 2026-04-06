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

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const blob = await response.blob()
      // Força o MIME type correto
      const pdfBlob = new Blob([blob], { type: 'application/pdf' })
      const blobUrl = window.URL.createObjectURL(pdfBlob)

      const link = document.createElement('a')
      link.href = blobUrl
      link.download = 'Cv_Pablo_Quirino.pdf'

      // Precisa estar no DOM para funcionar em todos os browsers
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Aguarda antes de revogar para o download iniciar
      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl)
      }, 100)

    } catch (error) {
      console.error('Erro ao baixar o CV:', error)
    }
  }
}
