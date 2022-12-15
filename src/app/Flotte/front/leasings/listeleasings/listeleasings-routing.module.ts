import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeleasingsComponent } from './listeleasings.component';


const routes: Routes = [
  {path:'',component:ListeleasingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeleasingsRoutingModule { }
