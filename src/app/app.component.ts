import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user = 'abc@xyz.com';
  title = 'app';
  loggedIn = false;
  version = 'v1.6.3';

  constructor(
    private authenticationService: AuthenticationService
  ) {
    authenticationService.userSource$.subscribe(user => {
      this.user = user;
    });
    authenticationService.loggedInSource$.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
    // this.user = localStorage.getItem('currentUser');
    // console.log(this.user)
    // console.log(this.loggedIn)
    //   this.loggedIn = !(!(this.user));
    //   console.log(this.loggedIn);
  }

  logout() {
    // this.authenticationService.intercom.trackEvent('App Logout');
    // this.loggedIn = false;
    // console.log(this.loggedIn)
    this.authenticationService.logout();
  }

  ngOnInit() {
    if (this.authenticationService.isLoggedIn()) {
      this.loggedIn = true;
      this.user = this.user;
      // this.authenticationService.intercom.trackEvent('App Open');
    }
  }
}
