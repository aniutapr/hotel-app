import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeModule } from '../home/home.module';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, HomeModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss'
})
export class ReservationFormComponent implements OnInit{

  resForm: FormGroup = new FormGroup({});
  
  //dependency injection
  constructor(
    private formBuilder: FormBuilder, 
    private service: ReservationService,
    private router:Router,
  private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.resForm = this.formBuilder.group({
      checkInDate:['', Validators.required],
      checkOutDate:['', Validators.required],
      guestName:['', Validators.required],
      guestEmail:['', [Validators.required, Validators.email]],
      roomNumber:['', [Validators.required, Validators.min(1)]]
    })

    let id=this.activatedRoute.snapshot.paramMap.get('id')

    if(id){
      let reservation=this.service.getReservationsById(id);

      if(reservation)
        this.resForm.patchValue(reservation)
      }
  }
  public onSubmit(){
    if(this.resForm.valid){
      let reservation: Reservation = this.resForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id');
      //snapshot=current value
      if(id){
        reservation.id=id
        this.service.updateReservation(id,reservation)
        }
        else{
          this.service.addReservation(reservation);
        }
      this.router.navigate(['/list'])
    }
  }
}
