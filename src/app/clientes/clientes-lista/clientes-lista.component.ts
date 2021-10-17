import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Cliente } from '../clientes';
import {ClientesService} from '../../clientes.service'

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente;
  mensagemSucesso:string;
  mensagenmErro: string;

  constructor(
    private service: ClientesService,
    private router: Router) {}

  ngOnInit(): void {
    this.service
    .getClientes()
    .subscribe( resposta => this.clientes = resposta );
  }

  novoCadastro(){
    this.router.navigate(['/clientes/form'])
  }

  preparaDelecao(cliente: Cliente){
    this.clienteSelecionado = cliente;
  }

  deletarCliente(){
    this.service
      .deletar(this.clienteSelecionado)
      .subscribe(
        Response => {
          this.mensagemSucesso = 'Cliente deletado com sucesso!'
          this.ngOnInit();
      },
        erro => this.mensagenmErro = 'Ocorreu um erro ao Deletar o Cliente.'
      )
    
  }

}
