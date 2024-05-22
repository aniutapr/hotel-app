import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
//can be injected
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[]=[];

  getAllReservations(): Reservation[]{
    return this.reservations;
  }
  getReservationsById(id: string): Reservation | undefined{
    return this.reservations.find(res=>res.id === id);
  }
  addReservation(reservation:Reservation):void{
    this.reservations.push(reservation);
    console.log(this.reservations);
  }
  deleteReservation(id: string): void{
    let index = this.reservations.findIndex(res=>res.id === id);
    this.reservations.splice(index,1);
  }
  updateReservation(updatedData: Reservation): void{
    let index = this.reservations.findIndex(res=>res.id === updatedData.id);
    this.reservations[index] = updatedData;
  }
}
