import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisiteTechniqueComponent } from './visite-technique.component';

const routes: Routes = [
  {path:'',component:VisiteTechniqueComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisiteTechniqueRoutingModule { }
