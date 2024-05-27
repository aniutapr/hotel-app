import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';
import { Router } from 'express';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    AppComponent, 
    HomeModule, 
    ReservationModule,    
    RouterModule, 
    HttpClientModule
  ]
})
export class AppModule { }
