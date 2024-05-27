import { Injectable, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//can be injected
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  //api
  private apiUrl="http://localhost:3001"

  private reservations: Reservation[]=[];

  constructor(private http:HttpClient){
    //let savedData = localStorage.getItem("reservations"); 
    //this.reservations = savedData ? JSON.parse(savedData) : [];
  }
  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + "/reservations");
  }

  getReservationsById(id: string):Observable<Reservation>{
    //return this.reservations.find(res=>res.id === id);
    return this.http.get<Reservation>(this.apiUrl + "/reservations/"+id);

  }

  addReservation(reservation:Reservation):void{
    reservation.id=Date.now().toString();
    this.reservations.push(reservation);
    //console.log(this.reservations);
    //localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }

  deleteReservation(id: string): void{
    let index = this.reservations.findIndex(res=>res.id === id);
    this.reservations.splice(index,1);
    //localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }

  updateReservation(id:string, updatedData: Reservation): void{
    let index = this.reservations.findIndex(res=>res.id === id);
    this.reservations[index] = updatedData;
    //localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }
}
