import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    ReservationFormComponent, 
    ReservationListComponent
  ]
})
export class ReservationModule { }
