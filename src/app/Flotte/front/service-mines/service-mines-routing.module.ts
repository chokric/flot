import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceMinesComponent } from './service-mines.component';


const routes: Routes = [

  {path:'',component:ServiceMinesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceMinesRoutingModule { }
