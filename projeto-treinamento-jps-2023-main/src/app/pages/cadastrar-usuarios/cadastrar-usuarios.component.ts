import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-usuarios',
  templateUrl: './cadastrar-usuarios.component.html',
  styleUrls: ['./cadastrar-usuarios.component.css']
})
export class CadastrarUsuariosComponent {

  usuarioForm = new FormGroup({
    nome: new FormControl(''),
    idade: new FormControl(0)
  })

  enviar() {
    console.log(this.usuarioForm.value)
  }

}
