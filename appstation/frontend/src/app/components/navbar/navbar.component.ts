import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public loggedIn: boolean = false;
  public username: string | undefined;
  public isMenuVisible = false;

  constructor(public accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  public getCurrentUser(): void {
    this.accountService.currentUser$.subscribe({
      next: user => {
        this.loggedIn = !!user;
        this.username = user?.username ? user.username.charAt(0).toUpperCase() + user.username.slice(1) : '';

      },
      error: error => console.log(error)
    });
  }

  public toggleMenuVisibility(): void {
    this.isMenuVisible = true;
  }

  public editProfile(): void {
    this.isMenuVisible = false;
    this.router.navigateByUrl("data")
  }

  public visitDashboard(): void {
    this.isMenuVisible = false;
    this.router.navigateByUrl("dashboard")
  }

  public logout(): void {
    this.accountService.logOut();
    this.isMenuVisible = false;
    this.router.navigateByUrl("/");
  }

  public login(): void {
    this.router.navigateByUrl("login");
  }

  public register(): void {
    this.router.navigateByUrl("register");
  }
}
