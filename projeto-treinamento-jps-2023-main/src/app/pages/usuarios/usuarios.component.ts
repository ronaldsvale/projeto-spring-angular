import { Component } from '@angular/core';
import { IUsuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  usuarios: IUsuario[] = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuariosService.buscarTodos().subscribe(usuarios => {
      this.usuarios = usuarios;
    }, (error) => {
      console.log(error);
    })
  }



}
