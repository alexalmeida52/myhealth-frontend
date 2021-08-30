import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SchedulingComponent } from './views/scheduling/scheduling.component';
import { DoctorAvailabilityComponent } from './views/doctor-availability/doctor-availability.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'scheduling', component: SchedulingComponent
  },
  {
    path: 'doctor-availability/:id', component: DoctorAvailabilityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
