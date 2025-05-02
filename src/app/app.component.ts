import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ReservationFormComponent} from './components/reservation-form/reservation-form.component';
import {ReservationListComponent} from './components/reservation-list/reservation-list.component';

@Component({
  selector: 'app-root',
  imports: [ReservationFormComponent, ReservationListComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SGTO';
}
