import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cidade } from './shared/cidade.model';
import { URL_NEW } from './app.api';
import { URL_CIDADE } from './app.api';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CidadesService {

  constructor(private http: HttpClient) { }

  public getCidades(): Promise<Cidade[]> {
    return this.http.get(`${URL_NEW}`)
      .toPromise()
      .then((resposta: any) => resposta);
  }

  public getHistoricoPorCidade(id: number): Promise<Cidade> {
    return this.http.get(`${URL_NEW}/${id}`)
      .toPromise()
      .then((resposta: Cidade) => {
        return resposta;
      });
  }

}
