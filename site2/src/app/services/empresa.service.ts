import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Empresa, EmpresaCadastrar } from '../models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private url = environment.api

  constructor(private httpClient: HttpClient){}

  obterEmpresas(){
    return this.httpClient.get<Empresa[]>(this.url + '/ListarEmpresas');
  }

  cadastrarEmpresa(empresa: EmpresaCadastrar){
    return this.httpClient.post<Empresa>(this.url + '/AdicionarEmpresa', empresa);
  }

  editarEmpresa(empresa: Empresa){
    return this.httpClient.post<Empresa>(this.url + '/UpdateEmpresa', empresa);
  }

  removerEmpresa(empresa: Empresa){
    return this.httpClient.post<Empresa>(this.url + '/DeletarEmpresa', empresa);
  }
}
