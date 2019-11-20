import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TododescComponent } from './tododesc/tododesc.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StorageServiceModule } from 'ngx-webstorage-service';




@NgModule({
  declarations: [
    AppComponent,
    TododescComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
