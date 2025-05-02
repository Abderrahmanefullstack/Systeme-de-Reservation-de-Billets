import { Component } from '@angular/core';
import { Reservation } from '../../models/reservation.model';
import { ReservationDbService } from '../../services/reservation-db.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './reservation-form.component.html'
})
export class ReservationFormComponent {
  reservation: Reservation = { nom: '', email: '', date: '', destination: '' };

  constructor(private db: ReservationDbService) {}

  async onSubmit() {
    await this.db.addReservation(this.reservation);
    alert('Réservation enregistrée !');
    this.reservation = { nom: '', email: '', date: '', destination: '' };
  }
}
