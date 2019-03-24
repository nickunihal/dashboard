import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}
  canActivate() {
    if (this.authenticationService.isAdminLoggedIn()) {
      // console.log('logged in');
      return true;
    }

    this.router.navigate(['/login']);
    // console.log('not logged in');
    return false;
  }
}
