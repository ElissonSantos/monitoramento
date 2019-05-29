import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { DetalhadoComponent } from './detalhado/detalhado.component'
import { GraficoComponent } from './detalhado/grafico/grafico.component'
import { VazioComponent } from './detalhado/vazio/vazio.component'
import { DetalhadoResolver } from './detalhado/detalhado.resolver';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'detalhado', component: DetalhadoComponent,
    children: [
      { path: '', component: VazioComponent },
      {
        path: ':id',
        resolve: {
          cidade: DetalhadoResolver
        },
        component: GraficoComponent
      }
    ]
  }
];
