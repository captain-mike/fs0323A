import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ChiSiamoRoutingModule } from './chi-siamo-routing.module';



@NgModule({
  declarations: [
    ChiSiamoComponent
  ],
  imports: [
    CommonModule,
    ChiSiamoRoutingModule
  ]
})
export class ChiSiamoModule { }
