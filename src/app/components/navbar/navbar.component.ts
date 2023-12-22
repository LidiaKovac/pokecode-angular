import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  isLoggedIn!: boolean;
  subscriptions: Subscription[] = []
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
  constructor(private router: Router, private authSrv: AuthService) {
    this.subscriptions.push(this.authSrv.user.subscribe((res) => (this.user = res)));
    this.subscriptions.push(this.authSrv.isLoggedIn.subscribe((res) => (this.isLoggedIn = res)));
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
