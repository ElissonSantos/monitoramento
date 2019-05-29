import { Component, OnInit } from '@angular/core';
import { Cidade } from '../../shared/cidade.model';
import { CidadesService } from '../../cidades.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css'],
  providers: [CidadesService]
})

export class GraficoComponent implements OnInit {

  public cidade: Cidade;
  public cidadeSel: number;
  subscription = new Subscription();

  constructor(
    private cidadesService: CidadesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.subscription = this.route.data.subscribe((data) => {
      if (data.cidade) {
        this.cidade = data.cidade;
      }
    });

    /* this.cidadeSel = 2; */


    /* this.route.params.subscribe(
      (parametro: any) => console.log(parametro),
      ((erro: any) => console.log(erro)),
      () => console.log('Processo concluido'))
    */

  /*   this.cidadesService.getHistoricoPorCidade(this.cidadeSel)
      .then((cidade: Cidade) => {
        this.cidade = cidade;
      }); */

    // observavel
    const meuObservableTeste = Observable.create((observer: Observer<string>) => {
      observer.next('1');
      observer.next('5');
      observer.complete();
      observer.next('6');
    });

    // observador
    meuObservableTeste.subscribe(
      (resultado: string) => console.log(resultado),
      (erro: string) => console.log(erro),
      () => console.log('Stream finalizade')
    );

  }

}
