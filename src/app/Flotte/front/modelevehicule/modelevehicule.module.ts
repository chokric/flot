import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelevehiculeComponent } from './modelevehicule.component';
import { ModelevehiculeRoutingModule } from './modelevehicule-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';


@NgModule({
    declarations: [ModelevehiculeComponent],
    imports: [
        CommonModule,
        ModelevehiculeRoutingModule,
        SharedModule
    ]
})
export class ModelevehiculeModule { }
