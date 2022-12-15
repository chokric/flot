import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarqueVehiculeComponent } from './marque-vehicule.component';
import { MarqueVehiculeRoutingModule } from './marque-vehicule-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [MarqueVehiculeComponent],
  imports: [
    CommonModule,
    MarqueVehiculeRoutingModule,
    SharedModule
  ]
})
export class MarqueVehiculeModule { }
