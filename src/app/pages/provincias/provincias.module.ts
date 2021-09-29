import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvinciasRoutingModule } from './provincias-routing.module';
import { ProvinciasComponent } from './provincias.component';
import { ProvinciaComponent } from './provincia/provincia.component';


@NgModule({
  declarations: [
    ProvinciasComponent,
    ProvinciaComponent
  ],
  imports: [
    CommonModule,
    ProvinciasRoutingModule
  ]
})
export class ProvinciasModule { }
