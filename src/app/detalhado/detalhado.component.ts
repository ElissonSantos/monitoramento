import { Component, OnInit } from '@angular/core';
import { Cidade } from '../shared/cidade.model';
import { CidadesService } from '../cidades.service';
import { DetalhadoResolver } from './detalhado.resolver';

@Component({
  selector: 'app-detalhado',
  templateUrl: './detalhado.component.html',
  styleUrls: ['./detalhado.component.css'],
  providers: [ CidadesService, DetalhadoResolver ]
})
export class DetalhadoComponent implements OnInit {

  public cidades: Cidade[];

  constructor(private cidadeService: CidadesService) { }

  ngOnInit() {
    this.cidadeService.getCidades()
      .then((cidades: Cidade[]) => {
        this.cidades = cidades;
      });
  }

}
