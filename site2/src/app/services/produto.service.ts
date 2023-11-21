import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Produto, ProdutoCadastrar } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = environment.api

  constructor(private httpClient: HttpClient){}

  obterProdutos(){
    return this.httpClient.get<Produto[]>(this.url + '/ListarProdutos');
  }

  cadastrarProduto(produto: ProdutoCadastrar){
    return this.httpClient.post<Produto>(this.url + '/AdicionarProduto', produto);
  }

  editarProduto(produto: Produto){
    return this.httpClient.post<Produto>(this.url + '/UpdateProduto', produto);
  }

  removerProduto(produto: Produto){
    return this.httpClient.post<Produto>(this.url + '/DeletarProduto', produto);
  }
}
