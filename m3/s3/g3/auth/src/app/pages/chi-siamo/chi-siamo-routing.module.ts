import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';


const routes: Routes = [
  {
    path:'',
    component:ChiSiamoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],//forchild perché altrimenti non funziona siccome le rotte sono figlie di /chi siamo
  exports: [RouterModule]
})
export class ChiSiamoRoutingModule { }
