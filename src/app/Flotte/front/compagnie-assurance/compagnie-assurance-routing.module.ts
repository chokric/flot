import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompagnieAssuranceComponent } from './compagnie-assurance.component';


const routes: Routes = [
  {path:'',component:CompagnieAssuranceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompagnieAssuranceRoutingModule { }
