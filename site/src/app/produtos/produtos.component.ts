import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {
  produto$ = new Observable<Produto[]>();

    idProduto = '';  
    nomeProduto = '';  
    codInterno = '';
    codigo = '';
    quantidade = '';
    valor = '';
    observacoes = '';
    dataCriacao = new Date().toISOString();
    dataAtualizacao = new Date().toISOString();

  constructor(private ProdutoService: ProdutoService) {
    this.obterProdutosCadastrados();
  }

  obterProdutosCadastrados() {
    this.produto$ = this.ProdutoService.obterProdutos();
  }

  buttonClick() {

    if (!this.nomeProduto ) {
      return;
    }

    if (this.idProduto) {
        this.atualizar();
      return;
    }

    this.ProdutoService.cadastrarProduto({nomeProduto:this.nomeProduto, codInterno:parseInt(this.codInterno), 
      codigo:parseInt(this.codigo), quantidade:parseInt(this.quantidade), valor:parseInt(this.valor), 
      observacoes:this.observacoes, dataCriacao:this.dataCriacao})
      .subscribe(() => this.obterProdutosCadastrados())

      this.clearCampos()
  }

  atualizar(){
    this.ProdutoService.editarProduto({ 
      idProduto: parseInt(this.idProduto), nomeProduto:this.nomeProduto, codInterno:parseInt(this.codInterno), 
      codigo:parseInt(this.codigo), quantidade:parseInt(this.quantidade), valor:parseInt(this.valor), 
      observacoes:this.observacoes, dataAtualizacao: this.dataAtualizacao})
    .subscribe(_ => this.obterProdutosCadastrados());

    this.clearCampos()
    
  }

  preencherCampos(produto: Produto){
    this.idProduto = produto.idProduto!.toString();
    this.nomeProduto = produto.nomeProduto;
    this.codInterno = produto.codInterno.toString();
    this.codigo = produto.codigo.toString();
    this.quantidade = produto.quantidade.toString();
    this.valor = produto.valor.toString();
    this.observacoes= produto.observacoes;
  }

  clearCampos(){
    this.idProduto = '';  
    this.nomeProduto = '';  
    this.codInterno = '';
    this.codigo = '';
    this.quantidade = '';
    this.valor = '';
    this.observacoes = '';
  }

  remover(produto: Produto){
    this.ProdutoService.removerProduto(produto)
      .subscribe(_ => this.obterProdutosCadastrados());
  }
}
