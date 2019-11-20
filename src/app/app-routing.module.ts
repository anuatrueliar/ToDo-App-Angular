import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodolistComponent} from './todolist/todolist.component';
import {TododescComponent} from './tododesc/tododesc.component';


const routes: Routes = [
  {path:'', component:TodolistComponent},
  {path:'taskdesc/:id', component:TododescComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
