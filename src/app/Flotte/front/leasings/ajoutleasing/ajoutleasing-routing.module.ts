import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutleasingComponent } from './ajoutleasing.component';


const routes: Routes = [
  {path:'',component:AjoutleasingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjoutleasingRoutingModule { }
