import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssuranceRoutingModule } from './assurance-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AssuranceComponent } from './assurance.component';


@NgModule({
  declarations: [AssuranceComponent],
  imports: [
    CommonModule,
    AssuranceRoutingModule,
    SharedModule
  ]
})
export class AssuranceModule { }
