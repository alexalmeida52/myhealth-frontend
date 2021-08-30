import { Component, OnInit } from '@angular/core';
import { SchedulingService } from 'src/app/shared/services/scheduling.service';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent implements OnInit {

  selected: Date | null;
  schedulings = [];
  constructor(private schedulingService: SchedulingService) { }

  getStars(number) {
    return new Array(number);
  }

  formatPrice(value): String {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  getSchedulings() {
    this.schedulingService.getSchedulings().subscribe(data => {
      console.log(data);
      this.schedulings = data;
    });
  }

  createScheduling(data) {
    // simulando dados
    data = {
      start_date: "2021-10-10 08:00",
      patient_id: "612c033506ca88075f225bb6",
      doctor_id: "611c2ba240ba37049e2d332c",
      timetable_id: "612c27ec73b6c3082569bb1a"
    }

    this.schedulingService.createScheduling(data).subscribe(data => {
      console.log(data);
    });
  }
  
  ngOnInit(): void {
    this.getSchedulings();
  }

}
