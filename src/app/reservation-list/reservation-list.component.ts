import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HomeModule, ReservationFormComponent, HttpClientModule],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.scss'
})
export class ReservationListComponent implements OnInit {

  reservations:Reservation[]=[];

  constructor(
    private service: ReservationService){}

  ngOnInit(): void {
    this.service.getAllReservations().subscribe((data: Reservation[]) => {
      this.reservations = data;
    });
    }
  public deleteRes(id:string){
    this.service.deleteReservation(id);
  }  
  public editRes(id:string){

  }
    
}
