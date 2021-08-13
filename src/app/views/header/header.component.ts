import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initStyle();
  }

  initStyle() {
    // Initialize All Required DOM Element
    const burgerMenu = document.getElementById("burger");
    const navbarMenu = document.getElementById("menu");

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
