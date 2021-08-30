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

  ngOnInit(): void {
    this.getSchedulings();
  }

}
