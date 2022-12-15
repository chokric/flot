import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelevehiculeComponent } from './modelevehicule.component';

const routes: Routes = [
  {path:'',component:ModelevehiculeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelevehiculeRoutingModule { }
