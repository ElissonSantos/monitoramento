import { Component, OnInit } from '@angular/core';
import { Cidade } from '../shared/cidade.model';
import { CidadesService } from '../cidades.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ CidadesService ]
})
export class HomeComponent implements OnInit {

  public cidades: Cidade[]

  constructor(
    private cidadesService: CidadesService
  ) { }

  ngOnInit() {
    this.cidadesService.getCidades()
      .then(( cidades: Cidade[]) => {
        this.cidades = cidades
      })
  }

}
