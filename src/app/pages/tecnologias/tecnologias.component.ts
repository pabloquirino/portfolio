import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon?: string;
}

interface SkillGroup {
  title: string;
  emoji: string;
  skills: Skill[];
}

@Component({
  selector: 'app-tecnologias',
  imports: [],
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.scss'
})
export class TecnologiasComponent {
  readonly groups: SkillGroup[] = [
    {
      title: 'IA',
      emoji: '🤖',
      skills: [
        { name: 'Claude Code', icon: 'claude.svg' },
        { name: 'Agents & Subagentes' },
        { name: 'Skills' },
        { name: 'MCPs' },
        { name: 'Hooks' },
        { name: 'Plan Mode' },
      ],
    },
    {
      title: 'Backend',
      emoji: '⚙️',
      skills: [
        { name: 'C#', icon: 'c-sharp.svg' },
        { name: '.NET 8', icon: 'dotnet.svg' },
        { name: 'ASP.NET Core', icon: 'dotnet.svg' },
      ],
    },
    {
      title: 'Frontend',
      emoji: '🎨',
      skills: [
        { name: 'Vue 3', icon: 'vue.svg' },
        { name: 'Quasar', icon: 'quasar.svg' },
        { name: 'Angular', icon: 'angular.svg' },
        { name: 'TypeScript', icon: 'typescript.svg' },
        { name: 'Tailwind', icon: 'tailwindcss.svg' },
      ],
    },
    {
      title: 'Banco de Dados',
      emoji: '🗄️',
      skills: [
        { name: 'SQL Server', icon: 'sqlserver.svg' },
        { name: 'PostgreSQL', icon: 'postgre.svg' },
        { name: 'MySQL', icon: 'mysql.svg' },
      ],
    },
    {
      title: 'Testes & QA',
      emoji: '🧪',
      skills: [
        { name: 'Cypress', icon: 'cypress.svg' },
        { name: 'xUnit' },
        { name: 'Vitest', icon: 'vitest.svg' },
        { name: 'Postman', icon: 'postman.svg' },
        { name: 'Swagger', icon: 'swagger.png' },
        { name: 'JMeter', icon: 'jmeter.svg' },
        { name: 'OWASP ZAP' },
      ],
    },
    {
      title: 'Arquitetura',
      emoji: '🏛️',
      skills: [
        { name: 'Clean Architecture' },
        { name: 'Arquitetura Hexagonal' },
        { name: 'DDD' },
        { name: 'CQRS' },
      ],
    },
    {
      title: 'Gestão, DevOps & Infra',
      emoji: '🚀',
      skills: [
        { name: 'Azure DevOps', icon: 'azuredevops.svg' },
        { name: 'Scrum' },
        { name: 'Docker', icon: 'docker.svg' },
        { name: 'Git', icon: 'git.svg' },
        { name: 'GitHub', icon: 'github.png' },
      ],
    },
  ];
}
