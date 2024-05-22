import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss'
})
export class ReservationFormComponent implements OnInit{

  resForm: FormGroup = new FormGroup({});
  
  //dependency injection
  constructor(
    private formBuilder: FormBuilder, 
    private service: ReservationService){}

  ngOnInit(): void {
    this.resForm = this.formBuilder.group({
      checkInDate:['', Validators.required],
      checkOutDate:['', Validators.required],
      guestName:['', Validators.required],
      guestEmail:['', [Validators.required, Validators.email]],
      roomNumber:['', [Validators.required, Validators.min(1)]]
    })
  }

  public onSubmit(){
    if(this.resForm.valid){
      let reservation:Reservation = this.resForm.value;
      this.service.addReservation(reservation);
    }
  }
}
