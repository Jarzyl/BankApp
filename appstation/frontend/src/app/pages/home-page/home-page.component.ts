import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { User } from '../../models/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient, public accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  public setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }

  goToLogin() {
    this.router.navigateByUrl("login")
  }

  goToRegister(){
    this.router.navigateByUrl("register")
  }
}
