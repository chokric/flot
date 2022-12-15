import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompagnieAssuranceRoutingModule } from './compagnie-assurance-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { CompagnieAssuranceComponent } from './compagnie-assurance.component';


@NgModule({
  declarations: [CompagnieAssuranceComponent],
  imports: [
    CommonModule,
    CompagnieAssuranceRoutingModule,
    SharedModule
  ]
})
export class CompagnieAssuranceModule { }
