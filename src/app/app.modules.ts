// noinspection AngularInvalidEntryComponent

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReservationListComponent,
    ReservationFormComponent,
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
