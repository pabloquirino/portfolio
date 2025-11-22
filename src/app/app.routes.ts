import { Routes } from '@angular/router';
import { SobreComponent } from './pages/sobre/sobre.component';
import { TecnologiasComponent } from './pages/tecnologias/tecnologias.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';

export const routes: Routes = [

    { path: '', redirectTo: 'sobre', pathMatch: 'full' },

    { path: 'sobre', component: SobreComponent },
    { path: 'tecnologias', component: TecnologiasComponent },
    { path: 'portfolio', component: PortifolioComponent },
    { path: 'contato', component: ContatoComponent }

];