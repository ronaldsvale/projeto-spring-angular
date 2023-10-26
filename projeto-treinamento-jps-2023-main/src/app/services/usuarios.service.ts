import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  api = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  buscarTodos() {
    return this.http.get<IUsuario[]>(this.api);
  }

}
