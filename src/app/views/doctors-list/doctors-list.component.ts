import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import $ from 'jquery';
import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {
  faStart = faStar;
  doctors = [];
  name = "";

  constructor(private doctorService: DoctorService) { }

  formatPrice(value): String {
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  getDoctorsByName() {
    this.doctorService.getDoctorByName(this.name).subscribe(data => {
      this.doctors = data;
    });
  }
  ngOnInit(): void {
    this.doctorService.getCategorias().subscribe(data => {
      this.doctors = data;
    });
  }

}
