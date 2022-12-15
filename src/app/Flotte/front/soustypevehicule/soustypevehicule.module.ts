import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoustypevehiculeRoutingModule } from './soustypevehicule-routing.module';
import { SoustypevehiculeComponent } from './soustypevehicule.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [SoustypevehiculeComponent],
  imports: [
    CommonModule,
    SoustypevehiculeRoutingModule,
    SharedModule
  ]
})
export class SoustypevehiculeModule { }
