import { ProdutoService } from './../produto.service';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';

@Component({
  selector: 'app-principalProduto',
  templateUrl: './principalProduto.component.html',
  styleUrls: ['./principalProduto.component.css']
})
export class PrincipalProdutoComponent {
  btnCadastro:boolean = true;

  produtos:Produto[] = [];

  constructor(private servico:ProdutoService){}


  selecionar():void{
    this.servico.buscarProduto()
    .subscribe(retorno => this.produtos = retorno);

  }


}
