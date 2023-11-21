import { Component } from '@angular/core';
import { Empresa } from '../models/empresa.model';
import { Observable } from 'rxjs';
import { EmpresaService } from '../services/empresa.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent {

  empresas$ = new Observable<Empresa[]>();

  idEmpresa = '';
  razaoSocial = '';
  nomeFantasia = '';
  telefone = '';
  email = '';
  cnpj = '';
  site = '';
  dataCriacao = new Date().toISOString();
  
  dataAtualizacao = new Date().toISOString();

  constructor(private EmpresaService: EmpresaService) {
    this.obterEmpresasCadastradas();
  }

  obterEmpresasCadastradas() {
    this.empresas$ = this.EmpresaService.obterEmpresas();
  }

  buttonClick() {

    if (!this.razaoSocial ) {
      return;
    }

    if (this.idEmpresa) {
        this.atualizar();
      return;
    }

    this.EmpresaService.cadastrarEmpresa({razaoSocial: this.razaoSocial, nomeFantasia: this.nomeFantasia, 
      telefone: this.telefone, email: this.email, cnpj: this.cnpj, site: this.site, dataCriacao: this.dataCriacao})
      .subscribe(() => this.obterEmpresasCadastradas())
      this.clearCampos()
  }

  atualizar(){
    this.EmpresaService.editarEmpresa({ 
      idEmpresa: parseInt(this.idEmpresa), razaoSocial: this.razaoSocial, nomeFantasia: this.nomeFantasia, 
      telefone: this.telefone, email: this.email, cnpj: this.cnpj, site: this.site, dataAtualizacao: this.dataAtualizacao})
    .subscribe(_ => this.obterEmpresasCadastradas());
    this.clearCampos()
    
  }

  preencherCampos(empresa: Empresa){
    this.idEmpresa = empresa.idEmpresa!.toString();
    this.razaoSocial = empresa.razaoSocial;
    this.nomeFantasia = empresa.nomeFantasia;
    this.telefone = empresa.telefone;
    this.email = empresa.email;
    this.cnpj = empresa.cnpj;
    this.site = empresa.site;
  }

  clearCampos(){
    this.idEmpresa = '';
    this.razaoSocial = '';
    this.nomeFantasia = '';
    this.telefone = '';
    this.email = '';
    this.cnpj = '';
    this.site = '';
  }

  remover(empresa: Empresa){
    this.EmpresaService.removerEmpresa(empresa)
      .subscribe(_ => this.obterEmpresasCadastradas());
  }

}
