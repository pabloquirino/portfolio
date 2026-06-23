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
      linkGithub: 'https://github.com/pabloquirino/Weekly-Planner-AI'
    },
    {
      title: 'CRM de Atendimento ao Cliente',
      image: 'assets/projects/techclient.png',
      desc: 'Desenvolvido com C#, Angular e SQL Server, integrado ao Dialogflow + IA generativa para automação de atendimentos. Possui gestão de clientes, controle de tickets e histórico de interações.',
      linkGithub: 'https://github.com/pabloquirino/techclient'
    }
  ];
}
