import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarqueVehiculeComponent } from './marque-vehicule.component';

const routes: Routes = [
  {path:'',component:MarqueVehiculeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarqueVehiculeRoutingModule { }
