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
  expanded = new Set<string>();

  toggle(title: string): void {
    this.expanded.has(title) ? this.expanded.delete(title) : this.expanded.add(title);
  }

  projects: Project[] = [
    {
      title: 'Painel de Vida IA',
      image: 'assets/projects/preview.jpg',
      desc: 'Em desenvolvimento.',
      inProgress: true,
      linkGithub: 'https://github.com/pabloquirino'
    },
    {
      title: 'QA-Copilot',
      image: 'assets/projects/preview.jpg',
      desc: 'Em desenvolvimento.',
      inProgress: true,
      linkGithub: 'https://github.com/pabloquirino'
    },
    {
      title: 'Support-Assistant',
      image: 'assets/projects/support-assistant.png',
      desc: 'A proposta era criar um chatbot para auxiliar o time de suporte. Como o uso de documentos internos e RAG traria desafios de segurança, privacidade e consumo de tokens, optei por uma solução mais simples: cadastrar procedimentos manualmente e retornar respostas prontas com base na intenção do usuário.',
      linkGithub: 'https://github.com/pabloquirino/support-assistant'
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
      linkGithub: 'https://github.com/pabloquirino/techclient',
      tags: ['C#', 'Angular', 'SQL Server', 'Dialogflow']
    }, {
      title: 'Autenticação JWT',
      image: 'assets/projects/jwt.jpg',
      desc: 'REST API escalável construída com .NET 8, Clean Architecture e CQRS, com autenticação JWT + Refresh Token, deploy contínuo via GitHub Actions e Railway.',
      linkGithub: 'https://github.com/pabloquirino/apirest',
      tags: ['.NET 8', 'Clean Architecture', 'CQRS', 'JWT', 'GitHub Actions']
    }
  ];
}
