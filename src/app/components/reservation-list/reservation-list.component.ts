import { Component, OnInit } from '@angular/core';
import { ReservationDbService } from '../../services/reservation-db.service';
import { Reservation } from '../../models/reservation.model';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './reservation-list.component.html'
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private db: ReservationDbService) {}

  async ngOnInit() {
    this.reservations = await this.db.getAllReservations();
  }

  async delete(id: number) {
    await this.db.deleteReservation(id);
    this.reservations = await this.db.getAllReservations();
  }
}
