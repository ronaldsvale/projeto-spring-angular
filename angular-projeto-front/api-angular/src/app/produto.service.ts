import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './modelo/Produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  api = 'http://localhost:4200/produto';

  constructor(private http: HttpClient) { }

  buscarProduto() {
    return this.http.get<Produto[]>(this.api);
  }

}
