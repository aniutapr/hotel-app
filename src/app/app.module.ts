import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';
import { Router } from 'express';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    AppComponent, 
    HomeModule, 
    ReservationModule,    
    RouterModule
  ]
})
export class AppModule { }
