import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  query: string = '';
  user!: Partial<User> | null;
  isLoggedIn!: boolean
  constructor(private router: Router, private authSrv: AuthService) {
    this.authSrv.user.subscribe((res) => (this.user = res));
    this.authSrv.isLoggedIn.subscribe((res) => (this.isLoggedIn = res));
  }

  search(ev: Event) {
    ev.preventDefault();
    // alert("Cerco " + this.query)
    this.router.navigate(['pokemon', this.query]);
  }
  // query2 = new FormControl("")
  // onchange, onkeyup, oninput, onclick
  logout() {
    this.authSrv.logout();
  }
}
