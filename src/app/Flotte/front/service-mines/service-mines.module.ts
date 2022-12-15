import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ServiceMinesRoutingModule } from './service-mines-routing.module';
import { ServiceMinesComponent } from './service-mines.component';

@NgModule({
  declarations: [ServiceMinesComponent],
  imports: [
    CommonModule,
    ServiceMinesRoutingModule,
    SharedModule
  ]
})
export class ServiceMinesModule { }
