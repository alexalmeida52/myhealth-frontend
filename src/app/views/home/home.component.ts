import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  doctors = [
    {
      name: 'José Alex',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg'
    },
    {
      name: 'Bruno Wagner',
      avatar: 'https://hsmuniversity.com.br/wp-content/uploads/2019/04/steve_jobs.jpg'
    },
    {
      name: 'Frabricio Cruz',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU'
    },
    {
      name: 'Bruno Wagner',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3qBVX4XIA8zq3LpBn64zAuOt9_IZ7_H5uA&usqp=CAU'
    },
    {
      name: 'Julius Rock',
      avatar: 'https://pbs.twimg.com/profile_images/1100908406/julius_400x400.jpg'
    },{
      name: 'Bruno Wagner',
      avatar: ''
    },{
      name: 'Bruno Wagner',
      avatar: ''
    },
  ]
  constructor() { }

  ngOnInit(): void {
    console.log(this.doctors)
  }

}
