import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypevehiculeRoutingModule } from './typevehicule-routing.module';
import { TypevehiculeComponent } from './typevehicule.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';


@NgModule({
  declarations: [TypevehiculeComponent],
  imports: [
    CommonModule,
    TypevehiculeRoutingModule,
    SharedModule
  ]
})
export class TypevehiculeModule { }
