import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './views/home/home.component';
import { DoctorsListComponent } from './views/doctors-list/doctors-list.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { SchedulingComponent } from './views/scheduling/scheduling.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { DoctorAvailabilityComponent } from './views/doctor-availability/doctor-availability.component';

@NgModule({
  exports: [
    MatCardModule,
    MatDatepickerModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorsListComponent,
    HeaderComponent,
    FooterComponent,
    SchedulingComponent,
    DoctorAvailabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
