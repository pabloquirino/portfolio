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
      title: 'Sistema de Gestão',
      image: '/assets/me/me.png',
      desc: 'Aplicação web para controle financeiro e relatórios.',
      link: '#'
    },
    {
      title: 'Landing Page',
      image: '/assets/me/me.png',
      desc: 'Página moderna focada em conversão e performance.',
      link: '#'
    },
    {
      title: 'Dashboard Administrativo',
      image: '/assets/me/me.png',
      desc: 'Painel administrativo com gráficos dinâmicos.',
      link: '#'
    },
    {
      title: 'API REST',
      image: '/assets/me/me.png',
      desc: 'Backend escalável com autenticação JWT.',
      link: '#'
    }
  ];
}
