import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { GruG, GruGCadastrar } from '../models/grug.model';

@Injectable({
  providedIn: 'root'
})
export class GrugService {

  private url = environment.api

  constructor(private httpClient: HttpClient){}

  obterGrupoGeradores(){
    return this.httpClient.get<GruG[]>(this.url + '/ListarGrupoGeradores');
  }

  cadastrarGrupoGeradores(grug: GruGCadastrar){
    return this.httpClient.post<GruG>(this.url + '/AdicionarGrupoGeradores', grug);
  }

  editarGrugoGeradores(grug: GruG){
    return this.httpClient.post<GruG>(this.url + '/UpdateGrupoGeradores', grug);
  }

  removerGrugoGeradores(grug: GruG){
    return this.httpClient.post<GruG>(this.url + '/DeletarGrupoGeradores', grug);
  }
}
