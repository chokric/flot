import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeAssuranceRoutingModule } from './type-assurance-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { TypeAssuranceComponent } from './type-assurance.component';


@NgModule({
  declarations: [TypeAssuranceComponent],
  imports: [
    CommonModule,
    TypeAssuranceRoutingModule,
    SharedModule
  ]
})
export class TypeAssuranceModule { }
