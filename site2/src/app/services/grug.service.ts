import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Grug, GrugCadastrar } from '../models/grug.model';

@Injectable({
  providedIn: 'root'
})
export class GrugService {

  private url = environment.api

  constructor(private httpClient: HttpClient){}

  obterGrug(){
    return this.httpClient.get<GruG[]>(this.url + '/ListarGrug');
  }

  cadastrarGrug(grug: GrugCadastrar){
    console.log(grug)
    console.log(this.httpClient.post<Grug>(this.url + '/AdicionarGrug', grug))
    return this.httpClient.post<Grug>(this.url + '/AdicionarGrug', grug);
  }

  editarGrug(grug: Grug){
    return this.httpClient.post<Grug>(this.url + '/UpdateGrug', grug);
  }

  removerGrug(grug: Grug){
    return this.httpClient.post<Grug>(this.url + '/DeletarGrug', grug);
  }
}
