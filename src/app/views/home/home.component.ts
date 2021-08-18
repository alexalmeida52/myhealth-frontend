import { Component, OnInit } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faFilter = faFilter;
  constructor() { }

  ngOnInit(): void {
    this.initStyle()
  }

  initStyle() {
    // Initialize All Required DOM Element
    const burgerMenu = document.getElementById("burger2");
    const navbarMenu = document.getElementById("menu2");

    // Initialize Responsive Navbar Menu
    burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("active");
      navbarMenu.classList.toggle("active");

      if (navbarMenu.classList.contains("active")) {
        navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
      } else {
        navbarMenu.removeAttribute("style");
      }
    });

  }
}
