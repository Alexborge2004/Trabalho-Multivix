import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GruG } from '../models/grug.model';
import { GrugService } from '../services/grug.service';

@Component({
  selector: 'app-grug',
  templateUrl: './grug.component.html',
  styleUrls: ['./grug.component.scss']
})
export class GrugComponent {

  grug$ = new Observable<GruG[]>();

  idGrupoGerador = '';
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

  constructor(private GrugService: GrugService) {
    this.obterGrupoGeradores();
  }

  obterGrupoGeradores() {
    this.grug$ = this.GrugService.obterGrupoGeradores();
  }

  buttonClick() {

    if (!this.empresa ) {
      return;
    }

    if (this.idGrupoGerador) {
        this.atualizar();
      return;
    }

    this.GrugService.cadastrarGrupoGeradores({empresa:this.empresa,fabricante:this.fabricante,
      gPotencia:parseInt(this.gPotencia),nSerie:this.nSerie,modelo:this.modelo,filtro:this.filtro,
      fCompativeis:parseInt(this.fCompativeis),mangueira:this.mangueira,mCompativeis:parseInt(this.mCompativeis),
      tipoOper:parseInt(this.tipoOper),fabMotor:this.fabMotor,serie:this.serie,mmodelo:this.mmodelo,
      mPotencia:this.mPotencia, dataCriacao: this.dataCriacao})
      .subscribe(() => this.obterGrupoGeradores())

      this.clearCampos()
  }

  atualizar(){
    this.GrugService.editarGrugoGeradores({ 
      idGrupoGerador: parseInt(this.idGrupoGerador), empresa:this.empresa,fabricante:this.fabricante,
      gPotencia:parseInt(this.gPotencia),nSerie:this.nSerie,modelo:this.modelo,filtro:this.filtro,
      fCompativeis:parseInt(this.fCompativeis),mangueira:this.mangueira,mCompativeis:parseInt(this.mCompativeis),
      tipoOper:parseInt(this.tipoOper),fabMotor:this.fabMotor,serie:this.serie,mmodelo:this.mmodelo,
      mPotencia:this.mPotencia, dataAtualizacao: this.dataAtualizacao})
    .subscribe(_ => this.obterGrupoGeradores());

    this.clearCampos()
  }

  preencherCampos(grug: GruG){
    console.log(grug.idGrupoGerador);
    this.idGrupoGerador = grug.idGrupoGerador!.toString();
    this.empresa = grug.empresa;
    this.fabricante = grug.fabricante;
    this.gPotencia = grug.gPotencia.toString();
    this.nSerie = grug.nSerie.toString();
    this.modelo = grug.modelo;
    this.filtro = grug.filtro;
    this.fCompativeis = grug.fCompativeis.toString();
    this.mangueira = grug.mangueira;
    this.mCompativeis = grug.mCompativeis.toString();
    this.tipoOper = grug.tipoOper.toString();
    this.fabMotor = grug.fabMotor;
    this.serie = grug.serie;
    this.mmodelo = grug.mmodelo;
    this.mPotencia = grug.mPotencia;
  }

  clearCampos(){
    this.idGrupoGerador = '';
    this.empresa = '';
    this.fabricante = '';
    this.gPotencia = '';
    this.nSerie = '';
    this.modelo = '';
    this.filtro = '';
    this.fCompativeis = '';
    this.mangueira = '';
    this.mCompativeis = '';
    this.tipoOper = '';
    this.fabMotor = '';
    this.serie = '';
    this.mmodelo = '';
    this.mPotencia = '';
  }

  remover(GruG: GruG){
    this.GrugService.removerGrugoGeradores(GruG)
      .subscribe(_ => this.obterGrupoGeradores());
  }

}
