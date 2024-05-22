import { Injectable, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';

//can be injected
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[]=[];

  constructor(){
    let savedData = localStorage.getItem("reservations"); 
    this.reservations = savedData ? JSON.parse(savedData) : [];
  }
  getAllReservations(): Reservation[]{
    return this.reservations;
  }

  getReservationsById(id: string): Reservation | undefined{
    return this.reservations.find(res=>res.id === id);
  }

  addReservation(reservation:Reservation):void{
    reservation.id=Date.now().toString();
    this.reservations.push(reservation);
    //console.log(this.reservations);
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }

  deleteReservation(id: string): void{
    let index = this.reservations.findIndex(res=>res.id === id);
    this.reservations.splice(index,1);
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }

  updateReservation(id:string, updatedData: Reservation): void{
    let index = this.reservations.findIndex(res=>res.id === id);
    this.reservations[index] = updatedData;
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }
}
