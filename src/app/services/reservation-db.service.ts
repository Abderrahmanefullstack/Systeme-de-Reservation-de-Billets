// src/app/services/reservation-db.service.ts
import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationDbService extends Dexie {
  reservations!: Table<Reservation, number>;

  constructor() {
    super('ReservationDatabase');
    this.version(1).stores({
      reservations: '++id, nom, email, date, destination'
    });
  }

  addReservation(data: Reservation) {
    return this.reservations.add(data);
  }

  getAllReservations() {
    return this.reservations.toArray();
  }

  deleteReservation(id: number) {
    return this.reservations.delete(id);
  }
}
