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
      title: 'Planejador Semanal Com IA',
      image: 'assets/projects/weekly.jpg',
      desc: 'Em Desenvolvimento.',
      link: 'https://www.youtube.com/shorts/k6h239-GYv4',
      linkGithub: 'https://github.com/pabloquirino/techclient'
    },
    {
      title: 'CRM de Atendimento ao Cliente',
      image: 'assets/projects/techclient.png',
      desc: 'Desenvolvido com C#, Angular e SQL Server, integrado ao Dialogflow + IA generativa para automação de atendimentos. Possui gestão de clientes, controle de tickets e histórico de interações.',
      link: 'https://www.youtube.com/shorts/k6h239-GYv4',
      linkGithub: 'https://github.com/pabloquirino/techclient'
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
    },
    {
      title: 'Sistema de Gestão Fiscal com IA',
      image: 'assets/projects/preview.jpg',
      desc: 'Em desenvolvimento.',
      link: '#',
      linkGithub: '#'
    }
  ];
}
