import { Component } from '@angular/core';
import { Project } from './models/project.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-portifolio',
  imports: [
    CommonModule,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Landing Page',
      image: 'assets/projects/powerfit.png',
      desc: 'Focada em simplicidade, boa experiência do usuário (UX) e código organizado.',
      link: 'https://powerfit-kappa.vercel.app/',
      linkGithub: 'https://github.com/pabloquirino/powerfit'
    },
    {
      title: 'Marketplace de Veículos',
      image: 'assets/projects/autocommerce.png',
      desc: 'Desenvolvida com Angular, focada em performance, escalabilidade e experiência do usuário.',
      link: '#',
      linkGithub: 'https://github.com/pabloquirino/auto-commerce'
    },
    {
      title: 'Dashboard Administrativo',
      image: 'assets/projects/preview.jpg',
      desc: 'Painel administrativo com gráficos dinâmicos.',
      link: '#'
    },
    {
      title: 'API REST',
      image: 'assets/projects/preview.jpg',
      desc: 'Backend escalável com autenticação JWT.',
      link: '#'
    }
  ];
}
