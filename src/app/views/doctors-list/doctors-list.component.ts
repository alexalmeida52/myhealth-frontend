import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import $ from 'jquery';
import { faStar, faFilter } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {
  faStart = faStar;
  faFilter = faFilter;
  doctors = [];
  name = "";
  stars = 0;

  constructor(private doctorService: DoctorService) { }

  formatPrice(value): String {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  getDoctorsByName() {
    let filters = {
      name: this.name,
      stars: this.stars
    }
    this.doctorService.getDoctorByName(filters).subscribe(data => {
      this.doctors = data;
    });
  }

  setRating(number) {
    this.setStyleStars(number);

    this.stars = this.stars == number ? 0 : number;

  }

  setStyleStars(number) {
    if(document.getElementById('my-rate-' + number).classList.contains('my-rate-item-selected')){
      if(document.getElementById('my-rate-' + (number + 1)).classList.contains('my-rate-item-selected')){
        for(let i = (number+1); i <= 5; i++)
        document.getElementById('my-rate-' + i).classList.remove('my-rate-item-selected');
        return;
      }
      for(let i = 1; i <= 5; i++)
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
  ngOnInit(): void {
    this.doctorService.getCategorias().subscribe(data => {
      this.doctors = data;
    });
  }

}
