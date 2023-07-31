import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { AddPizzaComponent } from './pages/add-pizza/add-pizza.component';
import { EditPizzaComponent } from './pages/edit-pizza/edit-pizza.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'add',
    component:AddPizzaComponent
  },
  {
    path:'edit/:id',
    component:EditPizzaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
