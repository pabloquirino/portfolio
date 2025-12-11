import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './contato.component.html'
})
export class ContatoComponent {
  contactForm: FormGroup;
  toastMessage: any;
  toastType: any;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  sendMessage() {
    if (this.contactForm.invalid) return;

    emailjs.send(
      "service_luhdba7",
      "template_wivnxka",
      {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message
      },
      "oebqx29F6QSIHc1pL"
    ).then(() => {

      this.toastType = 'success';
      this.toastMessage = "Mensagem enviada com sucesso!";

      this.contactForm.reset();

      setTimeout(() => {
        this.toastMessage = '';
      }, 3000);

    })
      .catch(() => {

        this.toastType = 'error';
        this.toastMessage = "Falha ao enviar mensagem. Tente novamente.";

        setTimeout(() => {
          this.toastMessage = '';
        }, 3000);

      })

  }

  currentYear = new Date().getFullYear();

}