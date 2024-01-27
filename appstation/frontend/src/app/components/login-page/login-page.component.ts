import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  registerMode = false;

  public registerToggleFunction() {
    this.registerMode = true;
    console.log(this.registerMode)
  }

  public closeRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
