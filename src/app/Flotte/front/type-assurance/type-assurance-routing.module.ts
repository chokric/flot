import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeAssuranceComponent } from './type-assurance.component';


const routes: Routes = [
  {path:'',component:TypeAssuranceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeAssuranceRoutingModule { }
