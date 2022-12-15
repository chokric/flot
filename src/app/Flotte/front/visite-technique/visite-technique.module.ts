import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { VisiteTechniqueRoutingModule } from './visite-technique-routing.module';
import { VisiteTechniqueComponent } from './visite-technique.component';

@NgModule({
  declarations: [VisiteTechniqueComponent],
  imports: [
    CommonModule,
    VisiteTechniqueRoutingModule,
    SharedModule
  ]
})
export class VisiteTechniqueModule { }
