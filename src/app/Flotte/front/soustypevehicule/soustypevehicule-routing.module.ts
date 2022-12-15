import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoustypevehiculeComponent } from './soustypevehicule.component';


const routes: Routes = [
  {path:'',component:SoustypevehiculeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoustypevehiculeRoutingModule { }
