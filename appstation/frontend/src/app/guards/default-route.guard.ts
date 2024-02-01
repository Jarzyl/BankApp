import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { User } from '../models/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DefaultRouteGuard implements CanActivate {

  constructor(private accountService: AccountService, private router: Router) {}

  canActivate(): any {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
    if (user) {
      // Użytkownik jest zalogowany, przekieruj go na /dashboard
      this.router.navigate(['/dashboard']);
    } else {
      // Użytkownik nie jest zalogowany, przekieruj na stronę logowania
      this.router.navigate(['/home']);
    }
    return true;
  }
}
