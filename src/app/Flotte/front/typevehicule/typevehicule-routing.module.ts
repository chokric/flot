import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypevehiculeComponent } from './typevehicule.component';


const routes: Routes = [
  {path:'',component:TypevehiculeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypevehiculeRoutingModule { }
