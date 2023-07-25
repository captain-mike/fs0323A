import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'//questo fa si che si attivi solo nella home
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'chi-siamo',
    component: ChiSiamoComponent
  },
  {
    path:'contatti',
    component: ContattiComponent
  },
  {
    path:'**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
