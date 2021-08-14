import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  doctors = [
    {
      name: 'José Alex'
    },
    {
      name: 'Bruno Wagner'
    },
    {
      name: 'Frabricio Cruz'
    }
  ]
  constructor() { }

  ngOnInit(): void {
    console.log(this.doctors)
  }

}
