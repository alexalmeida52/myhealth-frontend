import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/shared/services/doctor.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorService.getCategorias().subscribe(data => {
      console.log('Médicos', data);
    });
  }

}
