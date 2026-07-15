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
      title: 'Planejador Financeiro Com IA',
      image: 'assets/projects/financial.jpg',
      desc: 'Em Desenvolvimento.',
      linkGithub: '/'
    },
    {
      title: 'Planejador Semanal Com IA',
      image: 'assets/projects/weekly.jpg',
      desc: 'O Weekly Planner AI não é um simples gerenciador de tarefas. É uma ferramenta de evolução pessoal que transforma o que você fez e aprendeu durante a semana em análises inteligentes geradas por IA.',
      linkGithub: 'https://github.com/pabloquirino/Weekly-Planner-AI'
    },
    {
      title: 'CRM de Atendimento ao Cliente',
      image: 'assets/projects/techclient.png',
      desc: 'Desenvolvido com C#, Angular e SQL Server, integrado ao Dialogflow + IA generativa para automação de atendimentos. Possui gestão de clientes, controle de tickets e histórico de interações.',
      linkGithub: 'https://github.com/pabloquirino/techclient'
    },{
      title: 'Autenticação JWT',
      image: 'assets/projects/jwt.jpg',
      desc: 'REST API escalável construída com .NET 8, Clean Architecture e CQRS, com autenticação JWT + Refresh Token, deploy contínuo via GitHub Actions e Railway.',
      linkGithub: 'https://github.com/pabloquirino/apirest'
    },{
      title: 'Marketplace Veículos',
      image: 'assets/projects/autocommerce.png',
      desc: 'Auto Commerce é uma plataforma web para compra e venda de veículos, desenvolvida com Angular 19, que permite aos usuários anunciar, editar e gerenciar seus próprios anúncios após autenticação via Google (Firebase Auth).',
      linkGithub: 'https://github.com/pabloquirino/auto-commerce'
    }
  ];
}
