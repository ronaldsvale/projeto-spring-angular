import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

import { CadastrarUsuariosComponent } from './pages/cadastrar-usuarios/cadastrar-usuarios.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'usuarios', component: UsuariosComponent
  },
  {
    path: 'usuarios/cadastrar', component: CadastrarUsuariosComponent
  },
  {
    path: 'usuarios/editar/:id', component: CadastrarUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
