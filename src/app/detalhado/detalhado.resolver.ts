import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cidade } from '../shared/cidade.model';
import { CidadesService } from '../cidades.service';

@Injectable({
  providedIn: 'root'
})
export class DetalhadoResolver implements Resolve<Cidade> {
  constructor(private cidadeService: CidadesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cidade> | Promise<Cidade> {
    const id = route.params.id;
    if (id) {
      return this.cidadeService.getHistoricoPorCidade(id);
    }
    return of(new Cidade());

  }

}
