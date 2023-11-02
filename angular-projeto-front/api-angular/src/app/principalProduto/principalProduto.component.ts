import { ProdutoService } from './../produto.service';
import { Component, OnInit} from '@angular/core';
import { Produto } from '../modelo/Produto';

@Component({
  selector: 'app-principalProduto',
  templateUrl: './principalProduto.component.html',
  styleUrls: ['./principalProduto.component.css']
})
export class PrincipalProdutoComponent implements OnInit{

  produto = new Produto();

  btnCadastro:boolean = true;

  tabela:boolean = true;

  produtos:Produto[] = [];

  constructor(private servico:ProdutoService){}


  selecionar(): void {
    const produtosObservable = this.servico.buscarProduto();

    produtosObservable.subscribe((retorno: Produto[]) => {
      this.produtos = retorno;
    });
  }


  cadastrar(): void {
    this.servico.cadastrar(this.produto);
    this.produto = new Produto();
    alert('Produto cadastrado com sucesso!');
  }

  selecionarProduto(posicao:number):void{

    this.produto = this.produtos[posicao];

    this.btnCadastro = false;

    this.tabela = false;
  }

  editar(): void {
    this.servico.editar(this.produto);
    let posicao = this.produtos.findIndex(obj => obj.id === this.produto.id);
    this.produtos[posicao] = this.produto;
    this.produto = new Produto();
    this.btnCadastro = true;
    this.tabela = true;
    alert('Produto editado com sucesso!');
  }

  remover(): void {
    this.servico.remover(this.produto.id);
    let posicao = this.produtos.findIndex(obj => obj.id === this.produto.id);
    this.produtos.splice(posicao, 1);
    this.produto = new Produto();
    this.btnCadastro = true;
    this.tabela = true;
    alert('Produto removido com sucesso!');
  }

  cancelar():void{

    this.produto = new Produto();

    this.btnCadastro = true;

    this.tabela = true;
  }

  ngOnInit(){
    this.selecionar();
  }


}
