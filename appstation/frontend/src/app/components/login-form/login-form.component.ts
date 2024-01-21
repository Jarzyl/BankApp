import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @Input() registerToggle: (() => void) | any;

    public model: any = {};
    

    constructor(private accountService: AccountService, private router: Router) {}

    public login() {
      this.accountService.logIn(this.model).subscribe({
      next: () => this.router.navigateByUrl("/finance"),
      error: error => console.log(error)
      });
    }

    public logout() {
        // this.accountService.loggedIn = false;
    }

    onClick() {
      if (this.registerToggle) {
        this.registerToggle();
        console.log("ess")
      }
    }
}
