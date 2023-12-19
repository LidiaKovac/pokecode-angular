import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  query:string = ""
  constructor(private router:Router) {

  }

  search(ev:Event) {
    ev.preventDefault()
    // alert("Cerco " + this.query)
    this.router.navigate(["pokemon", this.query])
  }
  // query2 = new FormControl("")
  // onchange, onkeyup, oninput, onclick
}
