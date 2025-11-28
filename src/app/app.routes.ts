import { Routes } from '@angular/router';
import { SobreComponent } from './pages/sobre/sobre.component';
import { TecnologiasComponent } from './pages/tecnologias/tecnologias.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

export const routes: Routes = [

    { path: '', redirectTo: 'sobre', pathMatch: 'full' },

    { path: 'sobre', component: SobreComponent },
    { path: 'tecnologias', component: TecnologiasComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contato', component: ContatoComponent }

];