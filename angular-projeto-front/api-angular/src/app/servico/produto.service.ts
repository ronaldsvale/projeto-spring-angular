import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../modelo/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url:string = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  buscarProduto():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url);
  }

  cadastrar(produto:Produto):Observable<Produto>{
    return this.http.post<Produto>(this.url, produto);
  }

  editar(produto:Produto):Observable<Produto>{
    return this.http.put<Produto>(this.url, produto);
  }

  remover(codigo:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + codigo);
  }
}
