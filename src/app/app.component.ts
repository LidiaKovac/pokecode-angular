import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokecode-angular';
  loading!: boolean
  constructor(private authSrv: AuthService, private loadingSrv:LoadingService) {
    this.loadingSrv.isLoading.subscribe((res)=> {
      this.loading = res
    })
    this.authSrv.verifyLogin()
  }
}
