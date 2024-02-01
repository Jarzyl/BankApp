import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WarningMessageType } from 'src/app/models/enums/message-types.enum';
import { AccountService } from 'src/app/services/account.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
    public model: any = {};
    

    constructor(private accountService: AccountService, private router: Router, private snackBarService: SnackBarService) {}

    public login() {
      this.accountService.logIn(this.model).subscribe({
      next: () => { 
        this.router.navigateByUrl("dashboard"),
        this.snackBarService.openSnackBar("You logged succesfully!", WarningMessageType.FadingSuccess);
      },
      
      error: error => this.snackBarService.openSnackBar(error.error, WarningMessageType.FadingError)
      });
    }

    onClick() {
    }
}
