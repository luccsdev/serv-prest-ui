import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';
import { ServicoPrestadoformComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ServicoPrestadoformComponent, 
    ServicoPrestadoListaComponent
  ],
  imports : [
    CommonModule,
    ServicoPrestadoRoutingModule,
    FormsModule,
    RouterModule
  ], exports : [
    ServicoPrestadoformComponent, 
    ServicoPrestadoListaComponent
  ] 
})
export class ServicoPrestadoModule { }
