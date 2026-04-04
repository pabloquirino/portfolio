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
      title: 'Sistema de Gestão de Serviços',
      image: 'assets/projects/preview.jpg',
      desc: 'ERP fullstack de mercado, incluindo ordens de serviço, gestão de clientes, agenda e módulos administrativos.',
      link: '#'
    },
    {
      title: 'API REST',
      image: 'assets/projects/swagger.png',
      desc: 'REST API escalável construída com .NET 8, Clean Architecture e CQRS, com autenticação JWT + Refresh Token, deploy contínuo via GitHub Actions e Railway.',
      link: 'https://apirest-production-d659.up.railway.app/swagger',
      linkGithub: 'https://github.com/pabloquirino/apirest'
    },
    {
      title: 'Marketplace de Veículos',
      image: 'assets/projects/autocommerce.png',
      desc: 'Desenvolvida com Angular, focada em performance, escalabilidade e experiência do usuário.',
      link: 'https://auto-commerce-eight.vercel.app/',
      linkGithub: 'https://github.com/pabloquirino/auto-commerce'
    },
    {
      title: 'Landing Page',
      image: 'assets/projects/powerfit.png',
      desc: 'Focada em simplicidade, boa experiência do usuário (UX) e código organizado.',
      link: 'https://powerfit-kappa.vercel.app/',
      linkGithub: 'https://github.com/pabloquirino/powerfit'
    }
  ];
}
