import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeleasingsRoutingModule } from './listeleasings-routing.module';
import { ListeleasingsComponent } from './listeleasings.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';


@NgModule({
  declarations: [ListeleasingsComponent],
  imports: [
    CommonModule,
    ListeleasingsRoutingModule,
    SharedModule
  ]
})
export class ListeleasingsModule { }
