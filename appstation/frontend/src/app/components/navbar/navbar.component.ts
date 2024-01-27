import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public loggedIn: boolean = false;
  // currentUser$: Observable<User | null> = of(null);

  constructor(public accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    // this.getCurrentUser();
    // this.currentUser$ = this.accountService.currentUser$;
  }

  editProfile() {
    // Logika dla edycji profilu
    console.log('Edit your profile');
    this.router.navigateByUrl("data")
  }

  visitDashboard() {
    this.router.navigateByUrl("dashboard")
  }

  // getCurrentUser() {
  //   this.accountService.currentUser$.subscribe({
  //     next: user => this.loggedIn = !!user,
  //     error: error => console.log(error)
  //   });
  // }

  logout() {
    this.accountService.logOut();
    console.log('Logout');
    this.router.navigateByUrl("/")
  }

  login() {
    console.log('Login');
    this.router.navigateByUrl("login")
  }
}
