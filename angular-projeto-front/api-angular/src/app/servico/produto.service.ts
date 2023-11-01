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

  selecionar():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url);
  }
}
