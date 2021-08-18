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
  // [
  //   {
  //     name: 'José Alex',
  //     avatar: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg'
  //   },
  //   {
  //     name: 'Bruno Wagner',
  //     avatar: 'https://hsmuniversity.com.br/wp-content/uploads/2019/04/steve_jobs.jpg'
  //   },
  //   {
  //     name: 'Frabricio Cruz',
  //     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU'
  //   },
  //   {
  //     name: 'Bruno Wagner',
  //     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3qBVX4XIA8zq3LpBn64zAuOt9_IZ7_H5uA&usqp=CAU'
  //   },
  //   {
  //     name: 'Julius Rock',
  //     avatar: 'https://pbs.twimg.com/profile_images/1100908406/julius_400x400.jpg'
  //   },{
  //     name: 'Bruno Wagner',
  //     avatar: ''
  //   },{
  //     name: 'Bruno Wagner',
  //     avatar: ''
  //   },
  // ]

  constructor(private doctorService: DoctorService) { }

  formatPrice(value): String {
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  ngOnInit(): void {
    // $("#input-id").rating();

    // // with plugin options (do not attach the CSS class "rating" to your input if using this approach)
    // $("#input-id").rating({'size':'lg'});
    this.doctorService.getCategorias().subscribe(data => {
      this.doctors = data;
    });
  }

}
