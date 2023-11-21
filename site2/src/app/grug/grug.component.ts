import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GruG } from '../models/grug.model';

@Component({
  selector: 'app-grug',
  templateUrl: './grug.component.html',
  styleUrls: ['./grug.component.scss']
})
export class GrugComponent {

  grug$ = new Observable<GruG[]>();

  idgrupogeradores = '';
  empresa = '';
  fabricante = '';
  gPotencia = '';
  nSerie = '';
  modelo = '';
  filtro = '';
  fCompativeis = '';
  mangueira = '';
  mCompativeis = '';
  tipoOper = '';
  fabMotor = '';
  serie = '';
  mmodelo = '';
  mPotencia = '';
  dataCriacao = new Date().toISOString();
  dataAtualizacao = new Date().toISOString();

  // constructor(private GruGService: GruGService) {
  //   this.obterGrupoGeradores();
  // }

  // obterEmpresasCadastradas() {
  //   this.empresas$ = this.EmpresaService.obterEmpresas();
  // }

  // buttonClick() {

  //   if (!this.razaoSocial ) {
  //     return;
  //   }

  //   if (this.idEmpresa) {
  //       this.atualizar();
  //     return;
  //   }

  //   this.EmpresaService.cadastrarEmpresa({razaoSocial: this.razaoSocial, nomeFantasia: this.nomeFantasia, 
  //     telefone: this.telefone, email: this.email, cnpj: this.cnpj, site: this.site, dataCriacao: this.dataCriacao})
  //     .subscribe(() => this.obterEmpresasCadastradas())
  // }

  // atualizar(){
  //   this.EmpresaService.editarEmpresa({ 
  //     idEmpresa: parseInt(this.idEmpresa), razaoSocial: this.razaoSocial, nomeFantasia: this.nomeFantasia, 
  //     telefone: this.telefone, email: this.email, cnpj: this.cnpj, site: this.site, dataAtualizacao: this.dataAtualizacao})
  //   .subscribe(_ => this.obterEmpresasCadastradas());

  //   this.idEmpresa = '';
  //   this.razaoSocial = '';
  //   this.nomeFantasia = '';
  //   this.telefone = '';
  //   this.email = '';
  //   this.cnpj = '';
  //   this.site = '';
  // }

  // preencherCampos(empresa: Empresa){
  //   this.idEmpresa = empresa.idEmpresa!.toString();
  //   this.razaoSocial = empresa.razaoSocial;
  //   this.nomeFantasia = empresa.nomeFantasia;
  //   this.telefone = empresa.telefone;
  //   this.email = empresa.email;
  //   this.cnpj = empresa.cnpj;
  //   this.site = empresa.site;
  // }

  // remover(empresa: Empresa){
  //   this.EmpresaService.removerEmpresa(empresa)
  //     .subscribe(_ => this.obterEmpresasCadastradas());
  // }

}
