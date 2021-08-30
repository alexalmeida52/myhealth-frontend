import { Component, OnInit } from '@angular/core';
import { DoctorAvailabilityService } from 'src/app/shared/services/doctor-availability.service';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ResponseGetDoctors } from 'src/app/shared/models/responseGetDoctors.model';
import $ from 'jquery';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doctor-availability',
  templateUrl: './doctor-availability.component.html',
  styleUrls: ['./doctor-availability.component.css']
})
export class DoctorAvailabilityComponent implements OnInit {

  selected: String | null;
  //schedules = ["2021-08-15 08:00","2021-08-15 08:30","2021-08-17 09:00","2021-08-15 09:30","2021-08-15 10:00","2021-08-15 10:30","2021-08-18 11:00","2021-10-15 11:30"];
  schedules = []; // Comentar a linha acima e descomentar essa.
  hours = [];
  doctor;
  stars = 0;

  constructor(
    private route: ActivatedRoute,
    private doctorAvailabilityService: DoctorAvailabilityService,
    private doctorService: DoctorService
  ) { }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    let a = this.formateDate(day);
    return this.schedules.some(v => v.indexOf(a)>=0);
  }

  formateDate(str) {
    return moment(str).format("YYYY-MM-DD");
  }

  formateDateToHour(str) {
    return moment(str).format("HH:mm");
  }

  addHours(selected: string) {
    
      this.hours = [];
      this.selected = moment(selected).format("DD/MM/YYYY");
      let day = this.formateDate(selected);

    
      this.schedules.forEach(v => {
    
        if(v.indexOf(day)>=0){
          this.hours.push(this.formateDateToHour(v));
        }
      
      });

      console.log(this.hours);


  }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.doctorService.getDoctorById(id).subscribe(data => {
      this.doctor = data;
      console.log(data);
      console.log(this.doctor);
    });

    
    // Descomentar a função abaixo para puxar os dados do banco. 
    
    this.doctorAvailabilityService.getSchedules(id).subscribe(data => {
      this.schedules = data;
      console.log(data);
    })
  

  }



  ////// COPIEI DO OUTRO

  formatPrice(value): String {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  setRating(number) {
    this.setStyleStars(number);

    this.stars = this.stars == number ? 0 : number;

  }

  setStyleStars(number) {
    if (document.getElementById('my-rate-' + number).classList.contains('my-rate-item-selected')) {
      if (((number + 1 ) <= 5) && document.getElementById('my-rate-' + (number + 1)).classList.contains('my-rate-item-selected')) {
        for (let i = (number + 1); i <= 5; i++)
          document.getElementById('my-rate-' + i).classList.remove('my-rate-item-selected');
        return;
      }
      for (let i = 1; i <= 5; i++)
        document.getElementById('my-rate-' + i).classList.remove('my-rate-item-selected');
      return;
    }

    for (let i = 1; i <= 5; i++) {
      if (i <= number) {
        document.getElementById('my-rate-' + i).classList.add('my-rate-item-selected');
      }
      else
        document.getElementById('my-rate-' + i).classList.remove('my-rate-item-selected');
    }
  }

  getStars(number) {
    return new Array(number);
  }

}
