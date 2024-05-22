import { Component } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.scss'
})
export class ReservationListComponent {
  constructor(
    private service: ReservationService){}

}
