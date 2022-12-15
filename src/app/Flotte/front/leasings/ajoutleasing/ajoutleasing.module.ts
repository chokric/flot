import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjoutleasingRoutingModule } from './ajoutleasing-routing.module';
import { AjoutleasingComponent } from './ajoutleasing.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AjoutleasingComponent],
  imports: [
    CommonModule,
    AjoutleasingRoutingModule,
    FormsModule
  ]
})
export class AjoutleasingModule { }
