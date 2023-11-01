import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './modelo/Produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  remover(id: number) {
    throw new Error('Método não implementado.');
  }
  editar(produto: Produto) {
    throw new Error('Método não implementado.');
  }
  cadastrar(produto: Produto) {
    throw new Error('Método não implementado.');
  }

  api = 'http://localhost:4200/produto';

  constructor(private http: HttpClient) { }

  buscarProduto() {
    return this.http.get<Produto[]>(this.api);
  }

}
