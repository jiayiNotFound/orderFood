import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DetailComponent } from './component/detail/detail.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'**',redirectTo:'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
